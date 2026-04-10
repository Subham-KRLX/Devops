'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function EditorialSplit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-24 md:py-40 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden bg-charcoal"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80"
              alt="Editorial fashion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 grain" />
          </motion.div>

          {/* Right — Text */}
          <motion.div className="lg:pl-8" style={{ y: textY }}>
            <motion.p
              className="text-label text-gold mb-6 tracking-[0.3em]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              The Vision
            </motion.p>
            <motion.h2
              className="text-headline text-cream mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Fashion as Architecture
            </motion.h2>
            <motion.p
              className="text-body text-cream/50 mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Each piece in the SparkSpirit collection is an exercise in restraint.
              We strip away the unnecessary, leaving only the essential — the precise
              cut, the deliberate drape, the weight of quality that speaks for itself.
            </motion.p>
            <motion.p
              className="text-body text-cream/50 mb-12 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              This is clothing for those who understand that true luxury lies not in
              excess, but in the spaces between — in silence, in tension, in the quiet 
              power of form.
            </motion.p>
            <motion.a
              href="/collections"
              className="inline-block text-label border-b border-cream/20 text-cream/60 pb-2 hover:text-cream hover:border-gold transition-all duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              data-cursor-hover
            >
              Discover Collections
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
