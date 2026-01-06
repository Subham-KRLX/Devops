const request = require('supertest');
const app = require('../src/app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Product API', () => {
    let createdProductId;
    let categoryId;

    beforeAll(async () => {
        // Create a category first
        const category = await prisma.category.create({
            data: { name: 'Test Category' }
        });
        categoryId = category.id;
    });

    afterAll(async () => {
        await prisma.productVariant.deleteMany();
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
        await prisma.$disconnect();
    });

    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                name: 'Test Product',
                description: 'A product for testing',
                price: 99.99,
                categoryId: categoryId,
                variants: [
                    { color: 'Red', size: 'M', stock: 10 }
                ]
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        createdProductId = res.body.id;
    });

    it('should get all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});
