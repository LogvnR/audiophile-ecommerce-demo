import { useEffect } from 'react';

import create from 'zustand';
import { CartProductContent } from '../helpers/types';

interface CartStore {
  cart: CartProductContent[];
  addToCart: ({}: CartProductContent) => void;
}

const useCart = create<CartStore>((set) => ({
  cart: [],
  addToCart: ({ ...props }: CartProductContent) =>
    set((state) => ({
      cart: [...state.cart, props],
    })),
}));

export default useCart;
