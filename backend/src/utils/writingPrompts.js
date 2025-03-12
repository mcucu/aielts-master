const constant = require('../constants');
const getWritingScoresPrompt = (
    skill,
    question,
    essay
) => {
    return `You are a lenient IELTS examiner. Below is a candidate's essay for ${skill}:
${question && `Question: ${question}`}
Essay: ${essay}

Your task is to grade the essay based on the following 4 criteria (each is given a score which is a whole number from 0-9):
${skill === "Writing Task 1" ? "Task Achievement" : "Task Response"}
Coherence & Cohesion
Lexical Resource
Grammatical Range & Accuracy

Format your output exactly as follows (do not write anything else):
${skill === "Writing Task 1" ? "Task Achievement" : "Task Response"}: <score>
Coherence & Cohesion: <score>
Lexical Resource: <score>
Grammatical Range & Accuracy: <score>`;
}

const getWritingCorrectionsPrompt = (essay) => {
    return `### GIVEN THE ESSAY: ${essay} ### AFTER CORRECTING ALL LANGUAGE MISTAKES, THE ESSAY BECOMES: `;
}

const getWritingSuggestionsPrompt = (question, essay) => {
    return `Below is an IELTS candidate's essay:
Question: ${question}
Essay: ${essay}

Provide 3 ideas to extend existing arguments, each with an example sentence. Ensure the ideas are simple, concrete, and dig deeper into what's already written (i.e. you must expand vertically, not horizontally). Format your output exactly as follows (do not write anything else):
1. **<idea1_title>**
    - <example1>
2. **<idea2_title>**
    - <example2>
3. **<idea3_title>**
    - <example3>`;
}

const getWritingImprovedPrompt = (question, essay) => {
    return `You are an IELTS examiner who has been tasked with improving a candidate's writing. Here's their essay:
Question: ${question}
Essay: ${essay}

Now, write an improved version by using more sophisticated language and elaborating on existing arguments. However, refrain from overuse of advanced lexical features. Ensure a formal and academic tone throughout. Then, define all the new vocabulary that is not in the original. Only short definitions are required. 
Format your output as follows (without tags):
<rewritten_version>
### Vocabulary
* **<item1>**: <brief_definition1>
* **<item2>**: <brief_definition2>
...`;
}

const getWritingEvaluationPrompt = (skill, essay) => {
    const criteria = EVALUATION_CRITERIA[skill];

    return `As an experienced IELTS examiner, evaluate the following Task ${skill} essay according to the official IELTS Writing band descriptors.
    Consider these specific criteria for Task ${skill}:${criteria}

Provide a detailed evaluation in Markdown format using this structure:

# Band Scores

- Task Response: [score /9.0] - [brief comment]
- Coherence and Cohesion: [score /9.0] - [brief comment]
- Lexical Resource: [score /9.0] - [brief comment]
- Grammatical Range and Accuracy: [score /9.0] - [brief comment]

**Overall Band Score:** [score /9.0]

# Detailed Feedback

## Task Response
[Provide specific feedback on how well the essay addresses the task requirements, including:
- For Task 1: data coverage, key features, trends, comparisons
- For Task 2: position, main ideas, supporting evidence, conclusions]

## Coherence and Cohesion
[Evaluate:
- Paragraph organization
- Logical progression
- Use of cohesive devices
- Referencing]

## Lexical Resource
[Analyze:
- Vocabulary range and accuracy
- Word choice and formation
- Collocations and idiomatic expressions
- Topic-specific terminology]

## Grammatical Range and Accuracy
[Assess:
- Sentence structures
- Grammar accuracy
- Punctuation
- Complex structures usage]

# Strengths
- [key strength 1]
- [key strength 2]
- [key strength 3]

# Areas for Improvement
- [specific area 1 with example and suggestion]
- [specific area 2 with example and suggestion]
- [specific area 3 with example and suggestion]

# Next Steps
1. [actionable improvement step 1]
2. [actionable improvement step 2]
3. [actionable improvement step 3]

Essay to evaluate: ${essay}`;
}

module.exports = {
    getWritingScoresPrompt,
    getWritingCorrectionsPrompt,
    getWritingSuggestionsPrompt,
    getWritingImprovedPrompt,
    getWritingEvaluationPrompt
};
