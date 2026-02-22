'use client';

import { ArrowRight } from 'lucide-react';

export function Newsletter() {
    return (
        <section className="py-[clamp(6rem,12vw,10rem)] px-4 bg-white flex flex-col items-center justify-center text-center">
            <div className="max-w-xl w-full">
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
                    Join the Inner Circle
                </h2>
                <p className="text-gray-500 font-sans tracking-wide mb-12">
                    Exclusive access to new collections and private sales.
                </p>

                <form className="flex flex-col sm:flex-row gap-6 items-end w-full" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex-1 w-full">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border-0 border-b border-gray-300 pb-3 text-sm focus:ring-0 focus:border-black transition-colors outline-none font-sans"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-gray-900 transition-colors w-full sm:w-auto"
                    >
                        Subscribe
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </form>
            </div>
        </section>
    );
}
