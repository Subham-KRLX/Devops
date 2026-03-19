import { create } from 'zustand';

interface UIStore {
  isCartOpen: boolean;
  isMenuOpen: boolean;
  toggleCart: (open?: boolean) => void;
  toggleMenu: (open?: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  isMenuOpen: false,
  toggleCart: (open) => set((state) => ({ isCartOpen: open !== undefined ? open : !state.isCartOpen })),
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open !== undefined ? open : !state.isMenuOpen })),
}));
