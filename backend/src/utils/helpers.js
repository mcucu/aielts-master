const { errorResponse } = require('./response');

/**
 * Error Handler
 */
const throwError = (res, code, msg = null) => {
    return res.json(
        errorResponse(code || 500, msg || `something went wrong`)
    );
};

const throwIfMissing = (res, data, msg = null) => {
    if (!data) {
        return res.json(
            errorResponse(400, msg || `must supply ${data}`)
        );
    }
};

module.exports = {
    throwError,
    throwIfMissing
}