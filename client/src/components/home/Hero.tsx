'use client';

import { motion } from 'framer-motion';
import { DESIGN } from '@/lib/constants/design';
import { Button } from '@/components/ui/Button';

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DESIGN.animations.duration.slow,
            ease: DESIGN.animations.easing.premium,
        },
    },
};

export function Hero() {
    return (
        <section
            className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-white"
            aria-label="Hero Introduction"
        >
            <motion.div
                initial={{ scale: 1.1, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: DESIGN.animations.duration.reveal,
                    ease: DESIGN.animations.easing.premium
                }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Fashion Collection"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.div
                className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-medium"
                >
                    The New Standard
                </motion.p>

                {/* Intentional design: The headline uses a visually tight line-height to feel like editorial print */}
                <motion.h1
                    variants={fadeUp}
                    className="text-fluid-h1 font-serif mb-10 leading-none drop-shadow-sm"
                >
                    Elevate Your <br />
                    Everyday Aesthetic.
                </motion.h1>

                <motion.div variants={fadeUp}>
                    <Button
                        variant="ghost"
                        className="border-white text-white hover:bg-white hover:text-black"
                        aria-label="Explore the new collection"
                    >
                        Explore Collection
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
