'use client';

import { use, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/data';
import { useCartStore } from '@/store/useCartStore';
import { ProductCard } from '@/components/home/ProductCard';
import { Footer } from '@/components/layout/Footer';

function MagneticButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    setPosition({ x: deltaX, y: deltaY });
  }, []);

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.2 }}
      className={className}
      data-cursor-hover
    >
      {children}
    </motion.button>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline text-cream mb-4">Not Found</h1>
          <Link
            href="/shop"
            className="text-label text-gold hover:text-gold-light transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);
  if (relatedProducts.length < 3) {
    const more = PRODUCTS.filter((p) => p.id !== product.id && !relatedProducts.includes(p)).slice(
      0,
      3 - relatedProducts.length
    );
    relatedProducts.push(...more);
  }

  const handleAddToCart = () => {
    addItem(product, selectedSize || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="pt-28 md:pt-36 pb-6">
        <div className="container-wide flex items-center gap-2 text-[11px] text-cream/30 tracking-wider uppercase">
          <Link href="/shop" className="hover:text-cream/60 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-cream/50">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Image Gallery */}
            <div className="space-y-4">
              {/* Main image */}
              <motion.div
                className="relative aspect-[3/4] bg-charcoal overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 grain" />
              </motion.div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-24 bg-charcoal overflow-hidden transition-all duration-300 ${
                        activeImage === i
                          ? 'ring-1 ring-gold ring-offset-2 ring-offset-obsidian'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — Product Info (sticky) */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {product.isNew && (
                  <span className="inline-block text-[9px] tracking-[0.25em] uppercase bg-gold text-obsidian px-3 py-1 font-medium mb-4">
                    New
                  </span>
                )}
                <p className="text-label text-cream/30 mb-2">{product.category}</p>
                <h1 className="text-title text-cream mb-4">{product.name}</h1>
                <p className="text-2xl text-cream/70 font-serif">
                  ${product.price.toLocaleString()}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-body text-cream/40 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {product.description}
              </motion.p>

              {/* Material */}
              {product.material && (
                <div className="border-t border-white/[0.04] pt-5">
                  <p className="text-label text-cream/25 mb-1">Material</p>
                  <p className="text-sm text-cream/50">{product.material}</p>
                </div>
              )}

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-label text-cream/40">Size</p>
                  <button className="text-[10px] text-cream/20 hover:text-cream/40 underline underline-offset-2 transition-colors uppercase tracking-wider">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 border text-sm tracking-wider transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-gold bg-gold/10 text-cream'
                          : 'border-white/10 text-cream/40 hover:border-cream/30 hover:text-cream/70'
                      }`}
                      data-cursor-hover
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <MagneticButton
                onClick={handleAddToCart}
                className={`w-full py-4 text-label tracking-[0.2em] transition-all duration-500 ${
                  added ? 'bg-gold text-obsidian' : 'bg-cream text-obsidian hover:bg-gold'
                }`}
              >
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </MagneticButton>

              {/* Details */}
              <div className="space-y-3 pt-4 border-t border-white/[0.04]">
                <p className="text-[11px] text-cream/20 tracking-wider">
                  Free shipping on orders over $500
                </p>
                <p className="text-[11px] text-cream/20 tracking-wider">
                  Complimentary returns within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-t border-white/[0.04]">
          <div className="container-wide">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-gold mb-3">Curated</p>
              <h2 className="text-headline text-cream">You May Also Like</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
