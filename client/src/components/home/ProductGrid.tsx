'use client';

import { motion } from 'framer-motion';
import { FEATURED_PRODUCTS } from '@/lib/data';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label text-gold mb-3">Curated</p>
            <h2 className="text-headline text-cream">Featured Pieces</h2>
          </motion.div>
          <motion.a
            href="/shop"
            className="hidden md:block text-label text-cream/40 hover:text-cream transition-colors link-gold pb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            data-cursor-hover
          >
            View All
          </motion.a>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={`${
                i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <ProductCard
                product={product}
                index={i}
                variant={i === 0 ? 'large' : 'default'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
