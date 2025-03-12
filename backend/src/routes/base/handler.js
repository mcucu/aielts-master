const { successResponse } = require('../../utils');

/**
 * handler
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {function} next - next function
 */
const handler = async (req, res) => {
    const lang = req.headers['accept-language'] || 'id-ID';

    return res.send(successResponse(`Hello World! ${lang}`));
};

// successResponse(`${config.name.toUpperCase()} is running`, config.description)

module.exports = handler;
