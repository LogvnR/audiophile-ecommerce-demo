import { useEffect } from 'react';

import create from 'zustand';
import { CartProductContent } from '../helpers/types';

interface CartStore {
  cart: CartProductContent[];
  total: number;
  totalItems: number;
  addToCart: ({}: CartProductContent) => void;
  adjustQuantity: (id: number, action: 'add' | 'remove') => void;
  adjustTotal: (amount: number, action: 'add' | 'remove') => void;
  removeItem: (id: number) => void;
}

const useCart = create<CartStore>((set) => ({
  cart: [],
  total: 0,
  totalItems: 0,
  addToCart: ({ ...props }: CartProductContent) =>
    set((state) => ({
      cart: [...state.cart, props],
      total: state.total + props.price * props.quantity,
      totalItems: state.totalItems + props.quantity,
    })),
  adjustQuantity: (id: number, action: 'add' | 'remove') => {
    if (action === 'add') {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? ({ ...item, quantity: item.quantity + 1 } as CartProductContent)
            : item
        ),
        totalItems: state.totalItems + 1,
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? ({ ...item, quantity: item.quantity - 1 } as CartProductContent)
            : item
        ),
        totalItems: state.totalItems - 1,
      }));
    }
  },
  adjustTotal: (amount: number, action: 'add' | 'remove') => {
    if (action === 'add') {
      set((state) => ({
        total: state.total + amount,
      }));
    } else {
      set((state) => ({
        total: state.total - amount,
      }));
    }
  },
  removeItem: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
}));

export default useCart;
