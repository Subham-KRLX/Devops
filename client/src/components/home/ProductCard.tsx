'use client';

import { Product } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div
            className="group relative flex flex-col gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/products/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                <AnimatePresence>
                    {isHovered && product.images.hover ? (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            src={product.images.hover}
                            alt={`${product.name} alternate view`}
                            className="absolute inset-0 w-full h-full object-cover z-10"
                        />
                    ) : null}
                </AnimatePresence>

                <img
                    src={product.images.primary}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
            </Link>

            <div
                className="absolute bottom-[72px] left-0 right-0 z-20 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-4"
            >
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        addItem(product);
                    }}
                    className="w-full bg-black text-white py-4 text-[10px] tracking-[0.2em] uppercase hover:bg-gray-900 shadow-xl"
                >
                    Quick Add
                </button>
            </div>

            <Link href={`/products/${product.id}`} className="flex justify-between items-start font-sans">
                <div className="flex-1">
                    <h3 className="text-sm font-medium tracking-tight text-gray-900 mb-0.5 group-hover:underline underline-offset-4 decoration-1">
                        {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 capitalize tracking-widest leading-none">{product.category}</p>
                </div>
                <span className="text-sm font-light text-gray-900 tracking-wider">
                    ${product.price}
                </span>
            </Link>
        </div>
    );
}
