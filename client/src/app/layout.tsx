import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SparkSpirit Shop',
  description:
    'A premium fashion e-commerce experience designed for minimalism and high-end aesthetics.',
};

import { CartDrawer } from '@/components/cart/CartDrawer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#F9F9F9] text-[#000000]`}
      >
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}
