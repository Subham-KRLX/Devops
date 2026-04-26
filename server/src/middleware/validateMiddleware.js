const { ZodError } = require('zod');

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      next(error);
    } else {
      next(error);
    }
  }
};

module.exports = validate;
