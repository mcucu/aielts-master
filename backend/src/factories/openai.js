const OpenAI = require('openai');
const config = require('../../config');

const openai = new OpenAI({
    baseURL: config.openai.apiUrl,
    apiKey: config.openai.apiKey
});

module.exports = openai;
