'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Footer } from '@/components/layout/Footer';

const EDITORIAL_SECTIONS = [
  {
    label: 'Chapter I',
    title: 'The Weight of Nothing',
    body: 'We begin where others end — in silence. The SS25 collection strips away every gesture of excess, leaving only the essential. Fabrics that whisper. Silhouettes that command. A deliberate rejection of noise.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80',
  },
  {
    label: 'Chapter II',
    title: 'Architecture of Fabric',
    body: 'Each seam is a decision. Each drape is intentional. SparkSpirit treats the body as a structure — clothing becomes the architecture that inhabits it. Volume and void, tension and release.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80',
  },
  {
    label: 'Chapter III',
    title: 'Shadow & Material',
    body: 'Black is never just black. It is charcoal, obsidian, midnight, ink. Our material palette explores the spectrum of darkness — textures that reveal themselves only in movement, only in light.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80',
  },
];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-[-15%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
      <div className="absolute inset-0 grain" />
    </div>
  );
}

export default function EditorialPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1601762228823-aa5e75b37fda?w=1800&q=80"
            alt="Editorial hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="container-wide relative z-10 pb-16 md:pb-24">
          <motion.p
            className="text-label text-gold mb-4 tracking-[0.3em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Editorial
          </motion.p>
          <motion.h1
            className="text-display text-cream max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Silence
            <br />& Form
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-narrow text-center">
          <motion.p
            className="text-body text-cream/50 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            &ldquo;Fashion is not about clothes — it is about a look, a way of life, a philosophy.
            It&apos;s the tension between what is shown and what is hidden, between silence and
            statement.&rdquo;
          </motion.p>
          <motion.span
            className="inline-block text-label text-gold mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            — SparkSpirit Atelier
          </motion.span>
        </div>
      </section>

      {/* Editorial Sections */}
      {EDITORIAL_SECTIONS.map((section, i) => (
        <section key={i} className="py-16 md:py-24">
          <div className="container-wide">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                className={i % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <ParallaxImage src={section.image} alt={section.title} />
              </motion.div>

              {/* Text */}
              <motion.div
                className={`lg:px-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-label text-gold mb-4 tracking-[0.3em]">{section.label}</p>
                <h2 className="text-headline text-cream mb-6">{section.title}</h2>
                <p className="text-body text-cream/40 max-w-md leading-relaxed">{section.body}</p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Full-width image break */}
      <section className="py-8">
        <div className="container-wide">
          <div className="relative aspect-[21/9] overflow-hidden bg-charcoal">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1800&q=80"
              alt="Fashion landscape"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 grain" />
            <div className="absolute inset-0 bg-obsidian/30" />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-40">
        <div className="container-narrow text-center">
          <motion.h2
            className="text-headline text-cream mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The conversation
            <br />
            continues.
          </motion.h2>
          <motion.a
            href="/shop"
            className="inline-block text-label border border-cream/20 text-cream px-10 py-4 hover:bg-cream hover:text-obsidian transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            data-cursor-hover
          >
            Explore the Collection
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
