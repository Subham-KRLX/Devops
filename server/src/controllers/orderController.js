const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const { z } = require('zod');

const prisma = new PrismaClient();

// Schema validation for creating an order
const createOrderSchema = z.object({
    items: z.array(z.object({
        productId: z.number(),
        quantity: z.number().min(1),
    })).min(1),
});

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    const { items } = createOrderSchema.parse(req.body);

    if (!items || items.length === 0) {
        res.status(400);
        throw new Error('No order items');
    }

    // Calculate total and prepare order items data
    let totalAmount = 0;
    const orderItemsData = [];

    for (const item of items) {
        const product = await prisma.product.findUnique({
            where: { id: item.productId },
        });

        if (!product) {
            res.status(404);
            throw new Error(`Product not found: ${item.productId}`);
        }

        const price = Number(product.price);
        totalAmount += price * item.quantity;

        orderItemsData.push({
            productId: item.productId,
            quantity: item.quantity,
            price: price,
        });
    }

    // Create order and order items in a transaction
    const order = await prisma.order.create({
        data: {
            userId: req.user.id,
            totalAmount: totalAmount,
            items: {
                create: orderItemsData,
            },
        },
        include: {
            items: true,
        },
    });

    res.status(201).json(order);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await prisma.order.findMany({
        where: {
            userId: req.user.id,
        },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    res.json(orders);
});

module.exports = {
    createOrder,
    getMyOrders,
};
