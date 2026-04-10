import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/home/MarqueeStrip';
import { ProductGrid } from '@/components/home/ProductGrid';
import { EditorialSplit } from '@/components/home/EditorialSplit';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ProductGrid />
      <EditorialSplit />
      <Marquee />
      <Footer />
    </main>
  );
}
