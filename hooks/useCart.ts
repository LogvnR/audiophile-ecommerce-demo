import create from 'zustand';
import { CartProductContent } from '../helpers/types';

interface CartStore {
  cart: CartProductContent[];
  total: number;
  totalItems: number;
  addToCart: ({}: CartProductContent) => void;
  adjustQuantity: (
    id: number,
    action: 'add' | 'remove',
    amount: number
  ) => void;
  adjustTotal: (amount: number, action: 'add' | 'remove') => void;
  removeItem: (id: number) => void;
  resetCart: () => void;
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
  adjustQuantity: (id: number, action: 'add' | 'remove', amount: number) => {
    if (action === 'add') {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? ({
                ...item,
                quantity: item.quantity + amount,
              } as CartProductContent)
            : item
        ),
        totalItems: state.totalItems + amount,
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id
            ? ({
                ...item,
                quantity: item.quantity - amount,
              } as CartProductContent)
            : item
        ),
        totalItems: state.totalItems - amount,
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
  resetCart: () => {
    set(() => ({
      cart: [],
      total: 0,
      totalItems: 0,
    }));
  },
}));

export default useCart;
