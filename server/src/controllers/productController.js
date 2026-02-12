const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

exports.createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, categoryId, variants, images } = req.body;
    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            categoryId,
            variants: {
                create: variants,
            },
            images: {
                create: images,
            },
        },
        include: {
            variants: true,
            images: true,
        },
    });
    res.status(201).json(product);
});

exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await prisma.product.findMany({
        include: {
            variants: true,
            images: true,
            category: true,
        },
    });
    res.json(products);
});

exports.getProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
        include: {
            variants: true,
            images: true,
            category: true,
        },
    });
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    res.json(product);
});

exports.updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.update({
        where: { id: parseInt(id) },
        data: req.body,
    });
    res.json(product);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await prisma.product.delete({
        where: { id: parseInt(id) },
    });
    res.json({ message: 'Product deleted successfully' });
});
