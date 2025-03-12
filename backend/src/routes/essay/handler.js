const { successResponse } = require('../../utils');

/**
 * handler
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {function} next - next function
 */
const handler = async (req, res) => {
    const lang = req.headers['accept-language'] || 'id-ID';

    return res.json(
        successResponse(`Essay Index ${lang}`)
    );
};

/**
 * essaySubmitHandler
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {function} next - next function
 */
const essaySubmitHandler = async (req, res) => {
    const lang = req.headers['accept-language'];
    const { body } = req;
    const {
        authController
    } = res.locals;

    const result = await authController.signInWithEmail(body, lang);

    return res.json(
        successResponse(result)
    );
};

module.exports = {
    handler,
    essaySubmitHandler
}
