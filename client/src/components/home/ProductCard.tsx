'use client';

import { Product } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative flex flex-col gap-4 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Aspect Ratio 3:4 Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
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

                {/* Quick Add Drawer (Hidden until hover) */}
                <div
                    className="absolute bottom-0 left-0 right-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                    <button className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase hover:bg-gray-900">
                        Quick Add
                    </button>
                </div>
            </div>

            {/* Product Info (Minimalist) */}
            <div className="flex justify-between items-start font-sans">
                <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-900 mb-1">
                        {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                </div>
                <span className="text-sm font-light text-gray-900 tracking-wider">
                    ${product.price}
                </span>
            </div>
        </div>
    );
}
