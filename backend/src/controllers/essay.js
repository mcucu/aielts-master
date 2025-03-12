const openai = require('../providers');
const { throwIfMissing, throwError } = require('../utils/helpers');
const {
    getWritingScoresPrompt,
    // getWritingCorrectionsPrompt,
    // getWritingSuggestionsPrompt,
    // getWritingImprovedPrompt
} = require('../utils/writingPrompts');

// const getWritingExaminerResponse = async() => {
//     return ''
// }

// const streamWritingFeedback = async() => {
//     return ''
// }

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
    // const correctionPrompt = getWritingCorrectionsPrompt(essay);
    // const suggestionsPrompt = getWritingSuggestionsPrompt(question, essay);
    // const improvedPrompt = getWritingImprovedPrompt(question, essay);
    // const evaluationPrompt = getWritingEvaluationPrompt(skill, essay)

    let scores = ''
    try {
        scores = await openai.completion(scoresPrompt)
        // const corrections = await openai.completion(correctionPrompt)
        // const suggestions = await openai.completion(suggestionsPrompt)
        // const improved = await openai.completion(improvedPrompt)
        // const evaluation = await openai.completion(scoresPrompt)
    } catch (error) {
        throw error
    }

    const evaluation = scores.choices[0].message.content
    const usage = calculateUsageAndCosts(scores.usage);

    return {
        evaluation: evaluation,
        usage: usage
    }
}

const calculateUsageAndCosts = () => {
    const { prompt_tokens, completion_tokens, total_tokens } = usage;

    const promptCost = (prompt_tokens / 1000) * COST_PER_1K_TOKENS.prompt;
    const completionCost = (completion_tokens / 1000) * COST_PER_1K_TOKENS.completion;

    return {
        promptTokens: prompt_tokens,
        completionTokens: completion_tokens,
        totalTokens: total_tokens,
        costs: {
            promptCost: promptCost.toFixed(4),
            completionCost: completionCost.toFixed(4),
            totalCost: (promptCost + completionCost).toFixed(4)
        }
    };
}

module.exports = {
    analizeEssay
};
