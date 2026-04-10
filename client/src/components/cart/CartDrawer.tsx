'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';

export function CartDrawer() {
  const { isCartOpen, toggleCart } = useUIStore();
  const { cart, removeItem, updateQuantity, getCartTotal, clearCart } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200] bg-obsidian/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-[201] w-full max-w-md bg-charcoal border-l border-white/[0.04] flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/[0.04]">
              <h2 className="text-label text-cream tracking-[0.2em]">
                Cart ({cart.length})
              </h2>
              <button
                onClick={() => toggleCart(false)}
                className="text-cream/40 hover:text-cream transition-colors text-xl"
                aria-label="Close Cart"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-cream/30 text-sm mb-4">Your cart is empty</p>
                  <button
                    onClick={() => toggleCart(false)}
                    className="text-label text-gold hover:text-gold-light transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="relative w-20 h-24 bg-smoke shrink-0 overflow-hidden">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm text-cream/80 font-light truncate">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-[11px] text-cream/30 mt-0.5">Size: {item.selectedSize}</p>
                      )}
                      <p className="text-sm text-cream/50 mt-1">${item.price.toLocaleString()}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-white/10 text-cream/40 text-xs flex items-center justify-center hover:border-cream/30 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-xs text-cream/60 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-white/10 text-cream/40 text-xs flex items-center justify-center hover:border-cream/30 transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-[10px] text-cream/20 hover:text-red-400 transition-colors uppercase tracking-wider"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/[0.04] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-label text-cream/40">Total</span>
                  <span className="text-lg text-cream font-serif">
                    ${getCartTotal().toLocaleString()}
                  </span>
                </div>
                <button
                  className="w-full bg-cream text-obsidian text-label py-4 hover:bg-gold transition-colors duration-300"
                  data-cursor-hover
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-[10px] text-cream/20 hover:text-cream/40 transition-colors uppercase tracking-wider"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
