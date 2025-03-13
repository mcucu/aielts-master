// const {openai} = require('../factories/openai');
const OpenAI = require('openai');
const config = require('../../config');


const openai = new OpenAI({
    baseURL: config.openai.apiUrl,
    // apiKey: config.openai.apiKey
});

const completion = async (prompt) => {
    try {
        const res = await openai.chat.completions.create({
            model: config.openai.apiModel,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
            max_tokens: 1000
        });

        return res;
    } catch (error) {
        throw error
    }
}

module.exports = {
    completion
}
