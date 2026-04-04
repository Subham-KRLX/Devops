const { z } = require('zod');

const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be a positive number'),
  categoryId: z.number().int().positive('Category ID is required'),
  variants: z
    .array(
      z.object({
        color: z.string().optional(),
        size: z.string().optional(),
        stock: z.number().int().min(0).default(0),
      })
    )
    .optional(),
  images: z
    .array(
      z.object({
        url: z.string().url('Invalid image URL'),
      })
    )
    .optional(),
});

const updateProductSchema = createProductSchema.partial();

module.exports = {
  createProductSchema,
  updateProductSchema,
};
