export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: {
    primary: string;
    hover?: string;
  };
  description?: string;
  isNew?: boolean;
}

export interface UIState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  activeCategory?: string;
}
