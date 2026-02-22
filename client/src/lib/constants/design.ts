export const DESIGN = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
            ghost: '#F9F9F9',
            subtle: '#EAEAEA',
            textFocus: '#1A1A1A',
            textMuted: '#666666',
        },
    },
    typography: {
        serif: 'var(--font-playfair)',
        sans: 'var(--font-inter)',
    },
    spacing: {
        container: {
            padding: 'clamp(1rem, 5vw, 4rem)',
            maxWidth: '1440px',
        },
        // Adding extra padding as per Behance-level minimalist requirements
        whitespace: {
            sm: '2rem',
            md: '4rem',
            lg: '8rem',
            xl: '12rem',
        }
    },
    animations: {
        // Custom cubic-bezier for a premium, heavy feel
        easing: {
            premium: [0.22, 1, 0.36, 1],
            smooth: [0.4, 0, 0.2, 1],
        },
        duration: {
            fast: 0.2,
            base: 0.4,
            slow: 0.8,
            reveal: 1.2,
        }
    }
} as const;
