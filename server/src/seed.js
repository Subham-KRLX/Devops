const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seed...');

    // Clear existing data
    await prisma.productImage.deleteMany();
    await prisma.productVariant.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.testimonial.deleteMany();

    // Create Categories
    const menCategory = await prisma.category.create({
        data: {
            name: 'Men',
            image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=800',
        },
    });

    const womenCategory = await prisma.category.create({
        data: {
            name: 'Women',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
        },
    });

    const accessoriesCategory = await prisma.category.create({
        data: {
            name: 'Accessories',
            image: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=800',
        },
    });

    // Create Products - Men
    await prisma.product.create({
        data: {
            name: 'Premium Cotton Turtleneck',
            description: 'Luxurious comfort meets timeless elegance. Crafted from premium Egyptian cotton for all-day sophistication.',
            price: 89.99,
            categoryId: menCategory.id,
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1564257577154-75c8f6706740?w=800' },
                    { url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800' },
                ],
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
            description: 'Effortless style in premium fleece. The perfect blend of comfort and confidence for modern living.',
            price: 124.99,
            categoryId: menCategory.id,
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800' },
                ],
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

    // Create Products - Women
    await prisma.product.create({
        data: {
            name: 'Tailored Trench Coat',
            description: 'Redefine elegance with our signature trench. Precision tailoring for the modern woman.',
            price: 249.99,
            categoryId: womenCategory.id,
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800' },
                    { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800' },
                ],
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

    // Create Testimonials
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
