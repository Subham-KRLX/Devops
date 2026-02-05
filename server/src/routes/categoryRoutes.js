const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

const validate = require('../middleware/validateMiddleware');
const { createCategorySchema } = require('../validation/categorySchema');

router.post('/', validate(createCategorySchema), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;
