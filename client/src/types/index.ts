export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  sizes: string[];
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  material?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface Collection {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  season: string;
}

export interface UIState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  activeCategory?: string;
}
