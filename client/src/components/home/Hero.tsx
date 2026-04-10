'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const chars = headlineRef.current.querySelectorAll('.char');

    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      chars,
      { y: 120, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
      }
    );

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, []);

  const headline = 'The Art of Silence';
  const words = headline.split(' ');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1800&q=80')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-obsidian/70" />
        {/* Grain */}
        <div className="absolute inset-0 grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1100px]">
        <motion.p
          className="text-label text-gold mb-6 tracking-[0.3em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SS25 Collection
        </motion.p>

        <h1
          ref={headlineRef}
          className="text-display text-cream mb-8"
          style={{ perspective: '600px' }}
        >
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.25em]">
              {word.split('').map((char, ci) => (
                <span
                  key={ci}
                  className="char inline-block"
                  style={{ opacity: 0, transformOrigin: 'bottom' }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p
          ref={subtitleRef}
          className="text-body text-cream/50 max-w-md mx-auto mb-10"
          style={{ opacity: 0 }}
        >
          Where minimalism meets unapologetic boldness. A study in form, shadow, and the spaces
          between.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href="/shop"
            className="inline-block text-label border border-cream/30 text-cream px-10 py-4 hover:bg-cream hover:text-obsidian transition-all duration-500"
            data-cursor-hover
          >
            Explore Collection
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] text-cream/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-cream/20 origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
