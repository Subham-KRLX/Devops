'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';
import { DESIGN } from '@/lib/constants/design';
import Link from 'next/link';

export function CartDrawer() {
  const { isCartOpen, toggleCart } = useUIStore();
  const { cart, removeItem, updateQuantity, getCartTotal, getCartCount } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="text-lg font-serif tracking-tight">Your Bag ({getCartCount()})</h2>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-ghost rounded-full flex items-center justify-center text-gray-300">
                    <ShoppingBag size={32} />
                  </div>
                  <p className="text-gray-500 font-light italic">Your shopping bag is empty.</p>
                  <button
                    onClick={() => toggleCart(false)}
                    className="text-xs tracking-[0.2em] uppercase underline underline-offset-4 hover:text-gray-400 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
                      <img
                        src={item.images.primary}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-medium leading-tight max-w-[150px]">
                          {item.name}
                        </h3>
                        <span className="text-sm font-light">${item.price * item.quantity}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-auto">
                        {item.category}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs font-medium min-w-[30px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t space-y-4 bg-ghost/50">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">Subtotal</span>
                  <span className="text-xl font-light">${getCartTotal()}</span>
                </div>
                <p className="text-[10px] text-gray-400 italic">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link
                  href="/checkout"
                  onClick={() => toggleCart(false)}
                  className="w-full bg-black text-white py-5 text-xs tracking-[0.3em] uppercase hover:bg-zinc-900 transition-colors flex items-center justify-center gap-3 drop-shadow-xl"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
