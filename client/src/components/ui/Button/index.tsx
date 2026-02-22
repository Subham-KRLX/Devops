'use client';

import { useRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'ghost';
    className?: string;
}

export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: ButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const mousePosition = useMousePosition(buttonRef);

    const isPrimary = variant === 'primary';

    return (
        <motion.button
            ref={buttonRef}
            className={`
        relative overflow-hidden group flex items-center justify-center 
        px-10 py-4 tracking-widest uppercase transition-colors duration-500 text-xs
        ${isPrimary
                    ? 'bg-black text-white hover:bg-gray-900 border border-transparent'
                    : 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
                }
        ${className}
      `}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {}
            {isPrimary && (
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x ?? 0}px ${mousePosition.y ?? 0}px, rgba(255,255,255,0.1), transparent 100%)`
                    }}
                />
            )}

            {}
            <span className="relative z-10 font-sans tracking-widest">{children}</span>
        </motion.button>
    );
}
