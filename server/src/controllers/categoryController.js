const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');

const prisma = new PrismaClient();

exports.createCategory = asyncHandler(async (req, res) => {
    const { name, image } = req.body;
    const category = await prisma.category.create({
        data: { name, image },
    });
    res.status(201).json(category);
});

exports.getAllCategories = asyncHandler(async (req, res) => {
    const categories = await prisma.category.findMany({
        include: {
            _count: {
                select: { products: true },
            },
        },
    });
    res.json(categories);
});

exports.getCategoryById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
        where: { id: parseInt(id) },
        include: {
            products: {
                include: {
                    images: true,
                    variants: true,
                },
            },
        },
    });
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }
    res.json(category);
});
