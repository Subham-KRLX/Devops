'use client';

import { useState, useEffect, RefObject } from 'react';

/**
 * Hook: useMousePosition
 * 
 * Intentional design: This hook tracks the mouse position relative to a specific element.
 * It's essential for creating "magnetic" or "spotlight" button effects that add a layer
 * of premium human-touch to the UI that static CSS cannot replicate.
 */
export function useMousePosition(ref: RefObject<HTMLElement | null>) {
    const [mousePosition, setMousePosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                // Calculate position relative to the element's top-left corner
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
