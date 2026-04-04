'use client';

import { motion } from 'framer-motion';

const ITEMS = [
  'Free Worldwide Shipping',
  'Sustainably Sourced',
  'Premium Quality',
  'Exclusive Collections',
  'Free Returns Within 30 Days',
  'Handcrafted Details',
];

export function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden bg-black text-white py-3 border-t border-b border-gray-800"
      aria-label="Brand highlights"
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 24,
          ease: 'linear',
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="text-[11px] tracking-[0.25em] uppercase font-sans font-medium">
            {item}
            <span className="mx-6 opacity-40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
