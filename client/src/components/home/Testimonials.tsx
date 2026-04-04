'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { DESIGN } from '@/lib/constants/design';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'The quality is unmatched. Every piece feels considered, intentional. SparkSpirit has completely changed the way I approach getting dressed.',
    author: 'Amelia H.',
    title: 'Fashion Editor, London',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    quote:
      "I've shopped luxury brands my whole career. SparkSpirit sits right up there — refined silhouettes, extraordinary fabric, effortless delivery.",
    author: 'Marcus L.',
    title: 'Creative Director, NYC',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    quote:
      'The Merino Knit is perfection. Ordered three colours. Fast shipping, beautiful packaging — every single detail is premium.',
    author: 'Sophia R.',
    title: 'Stylist, Paris',
    avatar:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DESIGN.animations.duration.slow,
      ease: DESIGN.animations.easing.premium,
    },
  },
};

export function Testimonials() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,5vw,4rem)] bg-white"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: DESIGN.animations.duration.base,
            ease: DESIGN.animations.easing.smooth,
          }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4 font-sans">
            What our clients say
          </p>
          <h2 className="text-fluid-h2 font-serif font-bold tracking-tight">Worn & Loved</h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="flex flex-col gap-6 p-8 border border-gray-100 bg-[#F9F9F9] hover:border-gray-300 transition-colors duration-300"
            >
              {/* Quote mark */}
              <span className="font-serif text-5xl text-gray-200 leading-none select-none">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-sans text-sm leading-relaxed text-gray-700 flex-1">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="text-sm font-medium tracking-wide text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-400 tracking-wide font-sans">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
