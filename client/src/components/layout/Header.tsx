'use client';

import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { Search, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    const isScrolled = useScrollThreshold(50);

    // Minimalist badge for cart
    const cartItemCount = 2; // Hardcoded for 35% frontend scope

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
                    ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-[clamp(1rem,5vw,4rem)] flex items-center justify-between">

                {/* Left: Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/shop" className="text-sm tracking-wide uppercase hover:text-gray-500 transition-colors">
                        Shop
                    </Link>
                    <Link href="/collections" className="text-sm tracking-wide uppercase hover:text-gray-500 transition-colors">
                        Collections
                    </Link>
                    <Link href="/editorial" className="text-sm tracking-wide uppercase hover:text-gray-500 transition-colors">
                        Editorial
                    </Link>
                </nav>

                {/* Center: Brand Identity (Serif) */}
                <Link
                    href="/"
                    className="font-serif text-2xl md:text-3xl font-bold tracking-tight absolute left-1/2 -translate-x-1/2"
                >
                    SparkSpirit
                </Link>

                {/* Right: Icons */}
                <div className="flex items-center gap-6">
                    <button aria-label="Search" className="hover:text-gray-500 transition-colors">
                        <Search className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button aria-label="User Account" className="hidden sm:block hover:text-gray-500 transition-colors">
                        <User className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button aria-label="Shopping Cart" className="relative hover:text-gray-500 transition-colors">
                        <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>

            </div>
        </header>
    );
}
