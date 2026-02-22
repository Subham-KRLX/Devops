'use client';

import { Product } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <section className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1440px] mx-auto bg-ghost">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-fluid-h2 font-serif font-bold tracking-tight mb-4">
                        New Arrivals
                    </h2>
                    <p className="text-gray-500 font-sans tracking-wide">
                        Curated essentials for the modern wardrobe.
                    </p>
                </div>
                <button className="hidden md:block pb-1 border-b border-black text-sm tracking-widest uppercase hover:text-gray-600 hover:border-gray-600 transition-colors">
                    View All
                </button>
            </div>

            {/* Asymmetric Grid: every 3rd item spans 2 columns on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`${
                            // Create the asymmetric editorial look
                            index % 3 === 0 ? 'lg:col-span-2 lg:aspect-[16/9]' : 'col-span-1'
                            }`}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}
