import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface CartStore {
  cart: CartItem[];
  addItem: (product: Product, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (product, size) => {
        const currentCart = get().cart;
        const key = `${product.id}-${size || 'default'}`;
        const existingItem = currentCart.find(
          (item) => item.id === product.id && item.selectedSize === size
        );

        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...currentCart, { ...product, quantity: 1, selectedSize: size }] });
        }
      },
      removeItem: (productId) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          cart: get().cart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        });
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'sparkspirit-cart-storage',
    }
  )
);
