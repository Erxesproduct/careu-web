'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getProduct } from '@/lib/catalog';
import type { CartLine, Product } from '@/lib/types';

type CartItem = { product: Product; quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'careu-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setLines(JSON.parse(stored) as CartLine[]);
    } catch {
      setLines([]);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [hydrated, lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((line) => {
      const product = getProduct(line.slug);
      return product ? [{ product, quantity: line.quantity }] : [];
    });

    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      add: (slug, quantity = 1) =>
        setLines((current) => {
          const existing = current.find((line) => line.slug === slug);
          if (existing) {
            return current.map((line) =>
              line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line,
            );
          }
          return [...current, { slug, quantity }];
        }),
      setQuantity: (slug, quantity) =>
        setLines((current) =>
          quantity <= 0
            ? current.filter((line) => line.slug !== slug)
            : current.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
        ),
      remove: (slug) => setLines((current) => current.filter((line) => line.slug !== slug)),
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
