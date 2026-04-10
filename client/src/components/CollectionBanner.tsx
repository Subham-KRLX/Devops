'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Collection } from '@/types';

interface CollectionBannerProps {
  collection: Collection;
  index?: number;
}

export function CollectionBanner({ collection, index = 0 }: CollectionBannerProps) {
  return (
    <motion.div
      className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] h-[70vh] md:h-[80vh] shrink-0 overflow-hidden group"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href="/shop" className="block relative w-full h-full" data-cursor-hover>
        {/* Image */}
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

        {/* Grain */}
        <div className="absolute inset-0 grain" />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
          <p className="text-label text-gold mb-3 tracking-[0.3em]">{collection.season}</p>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-bold leading-[0.95] mb-3">
            {collection.name}
          </h3>
          <p className="text-sm text-cream/40">{collection.subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}
