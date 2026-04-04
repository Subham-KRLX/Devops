const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
router.route('/').post(authMiddleware, orderController.createOrder);
router.route('/myorders').get(authMiddleware, orderController.getMyOrders);
module.exports = router;
