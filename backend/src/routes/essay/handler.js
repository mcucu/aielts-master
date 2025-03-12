const { successResponse, throwError } = require('../../utils');
const essayController = require('../../controllers/essay');

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
    try {
        const result = await essayController.analizeEssay(req);

        return res.json(
            successResponse(result)
        );
    } catch (error) {
        let { status, message } = error;
        throw throwError(res, status, message)
    }
};

module.exports = {
    handler,
    essaySubmitHandler
}
