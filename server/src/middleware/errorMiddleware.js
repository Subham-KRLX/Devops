const errorMiddleware = {
    notFound: (req, res, next) => {
        const error = new Error(`Not Found - ${req.originalUrl}`);
        res.status(404);
        next(error);
    },

    errorHandler: (err, req, res, next) => {
        let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        let message = err.message;

        if (err.name === 'ZodError' || err?.issues) {
            statusCode = 400;
            message = 'Validation Error';
        }

        res.status(statusCode);
        res.json({
            message: message,
            errors: err?.issues || undefined,
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    },
};

module.exports = errorMiddleware;
