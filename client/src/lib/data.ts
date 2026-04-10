import { Product, Collection } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Structured Wool Coat',
    price: 1290,
    category: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'A sculptural double-breasted coat in premium virgin wool. The silhouette is deliberately oversized, draping with architectural precision.',
    material: '100% Virgin Wool',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Shadow Leather Jacket',
    price: 2450,
    category: 'Outerwear',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1617952089267-7c42b3b3c27b?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Handcrafted from full-grain Italian leather. A silhouette that merges deconstruction with strict tailoring.',
    material: 'Full-Grain Italian Leather',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Draped Silk Dress',
    price: 890,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Fluid silk charmeuse that moves with the body. Asymmetric hem, bias cut, utterly weightless.',
    material: '100% Silk Charmeuse',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Minimal Cashmere Knit',
    price: 680,
    category: 'Knitwear',
    images: [
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Grade-A Mongolian cashmere. Relaxed fit, ribbed hem, impossible softness.',
    material: '100% Grade-A Cashmere',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Tailored Wide-Leg Trousers',
    price: 590,
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'High-rise wide-leg trousers in fluid crepe. Precision cut, clean silhouette, uncompromising drape.',
    material: 'Wool-Crepe Blend',
    isNew: true,
  },
  {
    id: '6',
    name: 'Sculptural Blazer',
    price: 1150,
    category: 'Tailoring',
    images: [
      'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=800&q=80',
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Single-button construction. Peaked lapels. A silhouette that commands attention and space.',
    material: 'Stretch Wool Twill',
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Satin Column Dress',
    price: 1040,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M'],
    description: 'Floor-length column cut in liquid satin. Minimal, monastic, unapologetic.',
    material: '100% Acetate Satin',
    isNew: true,
  },
  {
    id: '8',
    name: 'Oversized Linen Shirt',
    price: 420,
    category: 'Tops',
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Relaxed drop-shoulder linen in stone-washed finish. Wear open or belted.',
    material: '100% Belgian Linen',
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'col-1',
    name: 'Silence & Form',
    subtitle: 'SS25 Collection',
    season: 'Spring / Summer 2025',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
  },
  {
    id: 'col-2',
    name: 'Dark Matter',
    subtitle: 'FW24 Collection',
    season: 'Fall / Winter 2024',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
  },
  {
    id: 'col-3',
    name: 'Negative Space',
    subtitle: 'Resort 2025',
    season: 'Resort 2025',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80',
  },
  {
    id: 'col-4',
    name: 'The Void',
    subtitle: 'FW25 Preview',
    season: 'Fall / Winter 2025',
    image: 'https://images.unsplash.com/photo-1601762228823-aa5e75b37fda?w=1200&q=80',
  },
];

export const CATEGORIES = [
  'All',
  'Outerwear',
  'Dresses',
  'Knitwear',
  'Tailoring',
  'Bottoms',
  'Tops',
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.isFeatured);
