'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: 'default' | 'large';
}

export function ProductCard({ product, index = 0, variant = 'default' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="block" data-cursor-hover>
        {/* Image container */}
        <div
          className={`relative overflow-hidden bg-charcoal ${
            variant === 'large' ? 'aspect-[3/4]' : 'aspect-[3/4]'
          }`}
        >
          {/* Primary image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          )}

          {/* Grain overlay */}
          <div className="absolute inset-0 grain pointer-events-none" />

          {/* New badge */}
          {product.isNew && (
            <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase bg-gold text-obsidian px-3 py-1 font-medium z-10">
              New
            </span>
          )}

          {/* Add to Cart slide-up */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-10"
            initial={{ y: '100%' }}
            animate={{ y: isHovered ? '0%' : '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-cream text-obsidian text-label py-4 hover:bg-gold transition-colors duration-300"
              data-cursor-hover
            >
              Add to Cart
            </button>
          </motion.div>
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1">
          <h3 className="text-sm text-cream/80 font-light tracking-wide">
            {product.name}
          </h3>
          <p className="text-sm text-cream/40">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
