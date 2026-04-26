const { z } = require('zod');

const createCategorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  image: z.string().optional(),
});

module.exports = {
  createCategorySchema,
};
