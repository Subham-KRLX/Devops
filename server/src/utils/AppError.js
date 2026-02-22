/**
 * @class AppError
 * @extends Error
 * 
 * Intentional architectural choice: We extend the native Error class 
 * to ensure that all operational errors thrown within services are 
 * predictable and easily distinguishable from programming bugs. 
 * This prevents stack traces from leaking to the client on expected failures.
 */
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
