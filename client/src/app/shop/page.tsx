'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import { ProductCard } from '@/components/home/ProductCard';
import { Footer } from '@/components/layout/Footer';

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredProducts = useMemo(() => {
    const result =
      activeCategory === 'All'
        ? [...PRODUCTS]
        : PRODUCTS.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container-wide">
          <motion.p
            className="text-label text-gold mb-4 tracking-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Collection
          </motion.p>
          <motion.h1
            className="text-display text-cream"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Shop
          </motion.h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-y border-white/[0.04] sticky top-[60px] md:top-[72px] z-40 bg-obsidian/90 backdrop-blur-xl">
        <div className="container-wide py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-label px-4 py-2 whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-obsidian bg-cream'
                    : 'text-cream/40 hover:text-cream/70'
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-transparent border border-white/10 text-cream/50 text-[11px] tracking-wider uppercase px-4 py-2 focus:outline-none focus:border-gold/50 appearance-none cursor-none"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            layout
          >
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-cream/30 text-sm">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
