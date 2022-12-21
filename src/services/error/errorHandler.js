'use strict';
const errHandler = (err, _req, res, _next) => {
    const { name, message, statusCode, errId } = err;
    
    console.log(err);

    switch (name) {
        case 'TokenExpiredError':
            return res.status(401).json(errorFormatter(1007, name, message));
        case 'ValidationError':
            return res
                .status(400)
                .json(errorFormatter(1008, name, err.details[0].message));
        case 'JsonWebTokenError':
            return res.status(401).json(errorFormatter(1009, name, message));
        case 'MulterError':
            return res
                .status(400)
                .json(errorFormatter(1010, name, 'File is too big.'));
        default:
            return res
                .status(statusCode || 500)
                .json(
                    errorFormatter(
                        errId || 1001,
                        name || 'InternalError',
                        message || 'Internal Server Error',
                    ),
                );
    }
};

const errorFormatter = (id, name, message) => ({
    error: { id, name, message },
});
const wrap = (fn) => (...args) => {
    fn(...args)
        .catch((err) => {
            args[2](err);
        });
};

module.exports = { errHandler, wrap };
