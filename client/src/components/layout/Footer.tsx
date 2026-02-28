'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { DESIGN } from '@/lib/constants/design';

const LINKS = {
    Shop: ['New Arrivals', 'Women', 'Men', 'Accessories', 'Shoes', 'Sale'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us'],
    Company: ['About SparkSpirit', 'Sustainability', 'Careers', 'Press'],
};

const SOCIALS = [
    { label: 'Instagram', href: '#', Icon: Instagram },
    { label: 'Twitter / X', href: '#', Icon: Twitter },
    { label: 'YouTube', href: '#', Icon: Youtube },
];

export function Footer() {
    const [ref, inView] = useInView<HTMLElement>({ threshold: 0.05 });

    return (
        <footer
            ref={ref}
            className="bg-black text-white pt-20 pb-10 px-[clamp(1rem,5vw,4rem)]"
            aria-label="Site Footer"
        >
            <div className="max-w-[1440px] mx-auto">
                {/* Top row */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: DESIGN.animations.duration.slow, ease: DESIGN.animations.easing.smooth }}
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <Link href="/" className="font-serif text-3xl font-bold tracking-tight">
                            SparkSpirit
                        </Link>
                        <p className="text-sm text-white/50 font-sans leading-relaxed max-w-xs">
                            Premium fashion for those who believe everyday dressing is an art form.
                        </p>
                        <div className="flex items-center gap-5 mt-2">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="text-white/40 hover:text-white transition-colors duration-300"
                                >
                                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(LINKS).map(([heading, items]) => (
                        <div key={heading} className="flex flex-col gap-4">
                            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans mb-1">
                                {heading}
                            </p>
                            {items.map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-sans"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Bottom row */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-white/30 text-xs font-sans tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: DESIGN.animations.duration.base }}
                >
                    <p>© {new Date().getFullYear()} SparkSpirit Shop. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
