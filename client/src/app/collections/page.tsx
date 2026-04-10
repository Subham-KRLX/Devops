'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLLECTIONS } from '@/lib/data';
import { CollectionBanner } from '@/components/CollectionBanner';
import { Footer } from '@/components/layout/Footer';

export default function CollectionsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(COLLECTIONS.length - 1) * 50}%`]);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="container-wide">
          <motion.p
            className="text-label text-gold mb-4 tracking-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Archive
          </motion.p>
          <motion.h1
            className="text-display text-cream"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Collections
          </motion.h1>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section
        ref={scrollContainerRef}
        className="relative"
        style={{ height: `${COLLECTIONS.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            ref={horizontalRef}
            className="flex gap-6 md:gap-8 pl-[clamp(1.25rem,5vw,5rem)]"
            style={{ x }}
          >
            {COLLECTIONS.map((collection, i) => (
              <CollectionBanner key={collection.id} collection={collection} index={i} />
            ))}
            {/* Spacer */}
            <div className="min-w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* Bottom section */}
      <section className="py-24 md:py-32">
        <div className="container-narrow text-center">
          <motion.p
            className="text-label text-gold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Every Season
          </motion.p>
          <motion.h2
            className="text-headline text-cream mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Stories told through fabric
          </motion.h2>
          <motion.p
            className="text-body text-cream/40 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Each collection is a chapter — an exploration of mood, material, and the negative space
            between intention and form.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
