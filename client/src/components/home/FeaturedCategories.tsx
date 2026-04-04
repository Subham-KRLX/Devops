'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { DESIGN } from '@/lib/constants/design';

const CATEGORIES = [
  {
    label: 'Women',
    subtitle: '142 pieces',
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1986&auto=format&fit=crop',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    label: 'Men',
    subtitle: '98 pieces',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    label: 'Accessories',
    subtitle: '63 pieces',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    label: 'Shoes',
    subtitle: '54 pieces',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    span: 'lg:col-span-2',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DESIGN.animations.duration.slow,
      ease: DESIGN.animations.easing.premium,
    },
  },
};

export function FeaturedCategories() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,5vw,4rem)] max-w-[1440px] mx-auto"
      aria-label="Shop by Category"
    >
      {/* Section heading */}
      <motion.div
        className="flex justify-between items-end mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: DESIGN.animations.duration.base,
          ease: DESIGN.animations.easing.smooth,
        }}
      >
        <div>
          <h2 className="text-fluid-h2 font-serif font-bold tracking-tight mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-500 font-sans tracking-wide">
            Find your style across every department.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.label}
            variants={itemVariants}
            className={`relative overflow-hidden cursor-pointer group ${cat.span}`}
            style={{ minHeight: '320px' }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs tracking-[0.2em] uppercase font-sans mb-1 opacity-70">
                {cat.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
                {cat.label}
              </h3>
            </div>

            {/* Arrow reveal */}
            <div className="absolute top-5 right-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
