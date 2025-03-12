require('dotenv').config();
const pkg = require('../package.json');

const config = {
    name: pkg.name,
    description: pkg.description,
    host: process.env.APP_HOST || 'http://0.0.0.0',
    port: process.env.PORT || 3000,
    timezone: process.env.APP_TIMEZONE || 'Asia/Jakarta',
    appEnv: process.env.APP_ENV || 'development',
    jwt: {
        jwtSecretKey: process.env.JWT_SECRET_KEY || 'aieltsbe-ch@ng3me',
        jwtExpiryTime: process.env.JWT_EXPIRY_TIME || 3600,
    },
    logger: {
        name: pkg.name,
        level: process.env.APP_DEBUG || 'trace',
    },
    openai: {
        provider: process.env.OPENAI_PROVIDER || '',
        apiUrl: process.env.OPENAI_API_URL || '',
        apiKey: process.env.OPENAI_API_KEY || 'aieltsbe-ch@ng3me',
        apiModel: process.env.OPENAI_API_MODEL || '',
    }
};

module.exports = config;
