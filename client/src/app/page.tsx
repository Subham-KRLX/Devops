'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { ProductGrid } from '@/components/home/ProductGrid';
import { Newsletter } from '@/components/home/Newsletter';
import { DESIGN } from '@/lib/constants/design';
import { Product } from '@/types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Essential Overcoat',
    price: 395,
    category: 'Outerwear',
    images: {
      primary: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    name: 'Silk Crepe Blouse',
    price: 185,
    category: 'Tops',
    images: {
      primary: 'https://images.unsplash.com/photo-1564222256577-45e728f2c611?q=80&w=2080&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1962&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    name: 'Tailored Wool Trousers',
    price: 245,
    category: 'Bottoms',
    images: {
      primary: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    name: 'Structured Leather Tote',
    price: 450,
    category: 'Accessories',
    images: {
      primary: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    name: 'Merino Wool Knit',
    price: 160,
    category: 'Knitwear',
    images: {
      primary: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop',
      hover: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop'
    }
  }
];

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: DESIGN.animations.duration.base,
          ease: DESIGN.animations.easing.smooth
        }}
        className="min-h-screen bg-ghost"
      >
        <Header />
        <Hero />
        <ProductGrid products={MOCK_PRODUCTS} />
        <Newsletter />
      </motion.main>
    </AnimatePresence>
  );
}
