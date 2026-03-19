'use client';

import { use, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Share2, Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types';
import { DESIGN } from '@/lib/constants/design';

// Mock data for initial development if local API isn't running
const MOCK_PRODUCT: Product = {
  id: '1',
  name: 'The Essential Overcoat',
  price: 395,
  category: 'Outerwear',
  description: 'A timeless silhouette meticulously crafted from premium Italian wool blend. Featuring a tailored fit, notched lapels, and a subtle textured finish that elevates any ensemble from casual to formal.',
  images: {
    primary: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop',
    hover: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop'
  }
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product>(MOCK_PRODUCT);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const addItem = useCartStore((state) => state.addItem);

  const images = [product.images.primary, product.images.hover].filter(Boolean) as string[];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <main className="min-h-screen bg-ghost">
      <Header />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="relative group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: DESIGN.animations.easing.smooth }}
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                    className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 mt-6">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 aspect-[3/4] overflow-hidden rounded-sm transition-all duration-300 ${
                    selectedImage === idx ? 'ring-1 ring-black ring-offset-2' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
                {product.category}
              </p>
              <div className="flex gap-4">
                <button className="text-gray-400 hover:text-black transition-colors"><Share2 size={18} /></button>
                <button className="text-gray-400 hover:text-rose-500 transition-colors"><Heart size={18} /></button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-light tracking-wider">${product.price}</span>
              <div className="h-4 w-[1px] bg-gray-300" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? "black" : "none"} className={i < 4 ? "text-black" : "text-gray-300"} />
                ))}
                <span className="text-xs text-gray-500 ml-2">(24 reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs tracking-widest uppercase font-semibold">Select Size</span>
                <button className="text-[10px] tracking-widest uppercase border-b border-gray-300 pb-0.5 hover:border-black transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] h-[50px] flex items-center justify-center border transition-all duration-300 text-sm tracking-widest ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-4">
              <button 
                onClick={() => addItem(product)}
                className="w-full bg-black text-white py-6 text-xs tracking-[0.3em] uppercase hover:bg-zinc-900 transition-colors flex items-center justify-center gap-3 drop-shadow-xl"
              >
                <ShoppingBag size={18} />
                Add to Bag
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-gray-100 flex flex-col gap-1 items-center justify-center rounded-sm">
                  <span className="text-[10px] tracking-widest uppercase text-gray-400">Shipping</span>
                  <span className="text-xs font-medium">Free Global</span>
                </div>
                <div className="p-4 bg-white border border-gray-100 flex flex-col gap-1 items-center justify-center rounded-sm">
                  <span className="text-[10px] tracking-widest uppercase text-gray-400">Returns</span>
                  <span className="text-xs font-medium">30-Day Window</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
