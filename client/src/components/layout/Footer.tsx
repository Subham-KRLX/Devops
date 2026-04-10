'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FOOTER_LINKS = {
  Shop: [
    { label: 'New Arrivals', href: '/shop' },
    { label: 'Outerwear', href: '/shop' },
    { label: 'Dresses', href: '/shop' },
    { label: 'Knitwear', href: '/shop' },
    { label: 'Tailoring', href: '/shop' },
  ],
  Brand: [
    { label: 'Our Story', href: '/editorial' },
    { label: 'Collections', href: '/collections' },
    { label: 'Editorial', href: '/editorial' },
    { label: 'Sustainability', href: '/' },
  ],
  Support: [
    { label: 'Contact', href: '/' },
    { label: 'Shipping', href: '/' },
    { label: 'Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-obsidian border-t border-white/[0.04]">
      {/* Newsletter */}
      <div className="container-wide py-20 md:py-28 border-b border-white/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label text-gold mb-4">Newsletter</p>
            <h3 className="text-title text-cream">
              Stay in the
              <br />
              silence.
            </h3>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-white/10 text-cream text-sm py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-cream/20"
              required
            />
            <button
              type="submit"
              className="text-label bg-cream text-obsidian px-8 py-3 hover:bg-gold transition-colors duration-300 shrink-0"
              data-cursor-hover
            >
              {submitted ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Links */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Link href="/" className="font-serif text-xl text-cream font-bold tracking-wide">
              SparkSpirit
            </Link>
            <p className="text-xs text-cream/20 mt-3 leading-relaxed max-w-[200px]">
              Where minimalism meets unapologetic boldness.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-label text-cream/40 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/25 hover:text-cream/60 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-6 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[10px] text-cream/15 tracking-wider">
          © 2025 SparkSpirit. All rights reserved.
        </p>
        <p className="text-[10px] text-cream/15 tracking-wider">Designed with silence.</p>
      </div>
    </footer>
  );
}
