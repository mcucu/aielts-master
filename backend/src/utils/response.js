/* eslint-disable brace-style */
const successResponse = (data, message) => {
    return {
        code: 200,
        success: true,
        message: message || null,
        data: (data !== undefined && data !== null ? data : null),
        exceptions: null
    };
};

const paginateResponse = (data, meta, message) => {
    return {
        code: 200,
        success: true,
        message: message || null,
        data: (data !== undefined && data !== null ? data : null),
        meta: meta || null,
        exceptions: null
    };
};

const errorResponse = (code, message, exceptions) => {
    return {
        code: code || 500,
        success: false,
        message: message || 'Something went wrong, please try again!',
        data: null,
        exceptions: exceptions || null
    };
};

const notFoundHandler = (req, res, next) => {
    if (res.headersSent) {
        next();
    }
    else {
        const err = new Error(`${req.method} ${req.url} Not Found`);
        err.code = 404;
        next(err);
    }
};

const errorHandler = (err, req, res, next) => {
    if (err.code === 404) {
        res.status(404).json(
            errorResponse(404, err.message || 'Not found')
        );
    }
    else {
        req.app.locals.logger.info(err.message || 'Something went wrong !!!');
        res.status(err.code || 500).json(
            errorResponse(err.code || 500, err.message || 'Something went wrong !!!')
        );
    }
};

module.exports = {
    successResponse,
    paginateResponse,
    errorResponse,
    notFoundHandler,
    errorHandler
};
