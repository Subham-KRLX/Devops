const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    await prisma.productImage.deleteMany();
    await prisma.productVariant.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.testimonial.deleteMany();

    const menCategory = await prisma.category.create({
        data: {
            name: 'Men',
        },
    });

    const womenCategory = await prisma.category.create({
        data: {
            name: 'Women',
        },
    });

    await prisma.category.create({
        data: {
            name: 'Accessories',
        },
    });

    await prisma.product.create({
        data: {
            name: 'Premium Cotton Turtleneck',
            description:
        'Luxurious comfort meets timeless elegance. Crafted from premium Egyptian cotton for all-day sophistication.',
            price: 89.99,
            categoryId: menCategory.id,
            images: {
                create: [],
            },
            variants: {
                create: [
                    { color: 'Midnight Black', size: 'M', stock: 15 },
                    { color: 'Midnight Black', size: 'L', stock: 10 },
                    { color: 'Ivory White', size: 'M', stock: 8 },
                ],
            },
        },
    });

    await prisma.product.create({
        data: {
            name: 'Classic Crew Hoodie',
            description:
        'Effortless style in premium fleece. The perfect blend of comfort and confidence for modern living.',
            price: 124.99,
            categoryId: menCategory.id,
            images: {
                create: [],
            },
            variants: {
                create: [
                    { color: 'Stone Gray', size: 'S', stock: 12 },
                    { color: 'Stone Gray', size: 'M', stock: 20 },
                    { color: 'Forest Green', size: 'L', stock: 7 },
                ],
            },
        },
    });

    await prisma.product.create({
        data: {
            name: 'Tailored Trench Coat',
            description:
        'Redefine elegance with our signature trench. Precision tailoring for the modern woman.',
            price: 249.99,
            categoryId: womenCategory.id,
            images: {
                create: [],
            },
            variants: {
                create: [
                    { color: 'Camel', size: 'XS', stock: 5 },
                    { color: 'Camel', size: 'S', stock: 10 },
                    { color: 'Navy', size: 'M', stock: 8 },
                ],
            },
        },
    });

    await prisma.testimonial.create({
        data: {
            name: 'Sarah Mitchell',
            comment: 'The quality is unmatched. Every piece feels luxurious and lasts forever.',
            rating: 5,
        },
    });

    await prisma.testimonial.create({
        data: {
            name: 'James Chen',
            comment: 'SparkSpirit has become my go-to for timeless, comfortable fashion.',
            rating: 5,
        },
    });

    console.log('✅ Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
