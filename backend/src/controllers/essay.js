const openaiProvider = require('../providers');
const { streamText }  = require('ai');
const { createStreamableValue }  = require('ai/rsc');
const { openai } = require('@ai-sdk/openai');
const config = require('../../config');
const constant = require('../constants');
const { throwIfMissing, throwError } = require('../utils/helpers');
const {
    getWritingScoresPrompt,
    getWritingCorrectionsPrompt,
    getWritingSuggestionsPrompt,
    getWritingImprovedPrompt,
    getWritingEvaluationPrompt
} = require('../utils/writingPrompts');

const calculateUsageAndCosts = (usage) => {
    const { prompt_tokens, completion_tokens, total_tokens } = usage;

    const promptCost = (prompt_tokens / 1000) * constant.COST_PER_1K_TOKENS.prompt;
    const completionCost = (completion_tokens / 1000) * constant.COST_PER_1K_TOKENS.completion;

    return {
        promptTokens: prompt_tokens,
        completionTokens: completion_tokens,
        totalTokens: total_tokens,
        costs: {
            promptCost: promptCost,
            completionCost: completionCost,
            totalCost: (promptCost + completionCost)
        }
    };
}

const analizeEssay = async (req, res) => {
    const {
        body: {
            skill,
            question,
            essay
        }
    } = req;

    throwIfMissing(skill, 'Invalid task type. Must be either "task1" or "task2"');
    throwIfMissing(question, 'Question is required');
    throwIfMissing(essay, 'Essay text is required');

    const scoresPrompt = getWritingScoresPrompt(skill, question, essay);
    const correctionPrompt = getWritingCorrectionsPrompt(essay);
    const suggestionsPrompt = getWritingSuggestionsPrompt(question, essay);
    const improvedPrompt = getWritingImprovedPrompt(question, essay);
    // const evaluationPrompt = getWritingEvaluationPrompt(skill, essay);

    const result = {
        scores: {evaluation: '', usage: 0},
        corrections: {evaluation: '', usage: 0},
        suggestions:{evaluation: '', usage: 0},
        improved: {evaluation: '', usage: 0},
        usages: {}
    };

    try {
        const scores = await openaiProvider.completion(scoresPrompt);
        const corrections = await openaiProvider.completion(correctionPrompt);
        const suggestions = await openaiProvider.completion(suggestionsPrompt);
        const improved = await openaiProvider.completion(improvedPrompt);
        // const evaluation = await openaiProvider.completion(scoresPrompt)

        // scores
        result.scores.evaluation = scores.choices[0].message.content;
        result.scores.usage = calculateUsageAndCosts(scores.usage);

        // corrections
        result.corrections.evaluation = corrections.choices[0].message.content;
        result.corrections.usage = calculateUsageAndCosts(corrections.usage);

        // suggestions
        result.suggestions.evaluation = suggestions.choices[0].message.content;
        result.suggestions.usage = calculateUsageAndCosts(suggestions.usage);

        // improved
        result.improved.evaluation = improved.choices[0].message.content;
        result.improved.usage = calculateUsageAndCosts(improved.usage);

    } catch (error) {
        throw error
    }

    result.usages = {
        promptTokens: result.scores.usage.promptTokens + result.corrections.usage.promptTokens + result.suggestions.usage.promptTokens + result.improved.usage.promptTokens,
        completionTokens: result.scores.usage.completionTokens + result.corrections.usage.completionTokens + result.suggestions.usage.completionTokens + result.improved.usage.completionTokens,
        totalTokens: result.scores.usage.totalTokens + result.corrections.usage.totalTokens + result.suggestions.usage.totalTokens + result.improved.usage.totalTokens,
        costs: {
            promptCost: result.scores.usage.costs.promptCost + result.corrections.usage.costs.promptCost + result.suggestions.usage.costs.promptCost + result.improved.usage.costs.promptCost,
            completionCost: result.scores.usage.costs.completionCost + result.corrections.usage.costs.completionCost + result.suggestions.usage.costs.completionCost + result.improved.usage.costs.completionCost,
            totalCost: result.scores.usage.costs.totalCost + result.corrections.usage.costs.totalCost + result.suggestions.usage.costs.totalCost + result.improved.usage.costs.totalCost
        }
    }

    return result
}

const analizeEssayV2 = async (req, res) => {
    const {
        body: {
            skill,
            question,
            essay
        }
    } = req;

    throwIfMissing(skill, 'Invalid task type. Must be either "task1" or "task2"');
    throwIfMissing(question, 'Question is required');
    throwIfMissing(essay, 'Essay text is required');

    const examinerPrompt = getWritingEvaluationPrompt(skill, question, essay);

    const result = {
        examiners: {evaluation: '', usage: 0}
    };

    try {
        const examiners = await openai.completion(examinerPrompt)

        // examiners
        result.examiners.evaluation = examiners.choices[0].message.content;
        result.examiners.usage = calculateUsageAndCosts(examiners.usage);
    } catch (error) {
        throw error
    }

    return result
}

const analizeEssayStream = async (req, res) => {
    const {
        body: {
            skill,
            question,
            essay
        }
    } = req;

    throwIfMissing(skill, 'Invalid task type. Must be either "task1" or "task2"');
    throwIfMissing(question, 'Question is required');
    throwIfMissing(essay, 'Essay text is required');

    const scoresPrompt = getWritingScoresPrompt(skill, question, essay);
    const correctionPrompt = getWritingCorrectionsPrompt(essay);
    const suggestionsPrompt = getWritingSuggestionsPrompt(question, essay);
    const improvedPrompt = getWritingImprovedPrompt(question, essay);
    // const evaluationPrompt = getWritingEvaluationPrompt(skill, essay);

    const result = {
        scores: {evaluation: '', usage: 0},
        corrections: {evaluation: '', usage: 0},
        suggestions:{evaluation: '', usage: 0},
        improved: {evaluation: '', usage: 0},
        usages: {}
    };

    try {
        // Stream the 4 types of feedback in parallel
        const [scores, corrections, suggestions, improved] = await Promise.all([
            streamText({
                model: config.openai.apiModel,
                temperature: 0,
                seed: 1,
                prompt: scoresPrompt,
            }),
            streamText({
                model: config.openai.apiModel,
                maxTokens: 1024,
                temperature: 0,
                prompt: correctionPrompt,
            }),
            streamText({
                model: config.openai.apiModel,
                prompt: suggestionsPrompt,
            }),
            streamText({
                model: config.openai.apiModel,
                prompt: improvedPrompt,
            }),
        ]);

        const scoresStream = createStreamableValue(scores.textStream);
        const correctionsStream = createStreamableValue(corrections.textStream);
        const improvedStream = createStreamableValue(improved.textStream);
        const suggestionsStream = createStreamableValue(suggestions.textStream);

        // scores
        result.scores.evaluation = scoresStream.value;
        result.scores.usage = calculateUsageAndCosts(scores.usage);

        // corrections
        result.corrections.evaluation = correctionsStream.value;
        result.corrections.usage = calculateUsageAndCosts(corrections.usage);

        // improved
        result.improved.evaluation = improvedStream.value;
        result.improved.usage = calculateUsageAndCosts(improved.usage);

        if (skill === "Writing Task 2") {
            // suggestions
            result.suggestions.evaluation = suggestions.choices[0].message.content;
            result.suggestions.usage = calculateUsageAndCosts(suggestions.usage);
        }
    } catch (error) {
        throw error
    }

    result.usages = {
        promptTokens: result.scores.usage.promptTokens + result.corrections.usage.promptTokens + result.improved.usage.promptTokens + result?.suggestions?.usage.promptTokens,
        completionTokens: result.scores.usage.completionTokens + result.corrections.usage.completionTokens + result.suggestions.usage.completionTokens + result.improved.usage.completionTokens,
        totalTokens: result.scores.usage.totalTokens + result.corrections.usage.totalTokens + result.suggestions.usage.totalTokens + result.improved.usage.totalTokens,
        costs: {
            promptCost: result.scores.usage.costs.promptCost + result.corrections.usage.costs.promptCost + result.suggestions.usage.costs.promptCost + result.improved.usage.costs.promptCost,
            completionCost: result.scores.usage.costs.completionCost + result.corrections.usage.costs.completionCost + result.suggestions.usage.costs.completionCost + result.improved.usage.costs.completionCost,
            totalCost: result.scores.usage.costs.totalCost + result.corrections.usage.costs.totalCost + result.suggestions.usage.costs.totalCost + result.improved.usage.costs.totalCost
        }
    }

    return result
}

module.exports = {
    analizeEssay,
    analizeEssayV2,
    analizeEssayStream
};
