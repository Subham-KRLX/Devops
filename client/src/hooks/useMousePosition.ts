'use client';

import { useState, useEffect, RefObject } from 'react';

export function useMousePosition(ref: RefObject<HTMLElement | null>) {
    const [mousePosition, setMousePosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();

                setMousePosition({
                    x: ev.clientX - rect.left,
                    y: ev.clientY - rect.top,
                });
            }
        };

        const currentRef = ref.current;
        if (currentRef) {
            currentRef.addEventListener('mousemove', updateMousePosition);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', updateMousePosition);
            }
        };
    }, [ref]);

    return mousePosition;
}
