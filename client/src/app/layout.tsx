import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SparkSpirit — High Fashion',
  description:
    'Where minimalism meets unapologetic boldness. A premium fashion e-commerce experience designed for silence, tension, and the quiet power of form.',
};

import { CartDrawer } from '@/components/cart/CartDrawer';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-cream font-sans antialiased">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <CartDrawer />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
