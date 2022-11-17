import create from 'zustand';
import {
  UserCheckoutDetails,
  Billing,
  Payment,
  Shipping,
} from '../helpers/types';

interface CheckoutStore {
  details: UserCheckoutDetails;
  setDetails: ({}: Billing | Payment | Shipping) => void;
}

const initialDetails: UserCheckoutDetails = {
  billing: {
    fullName: '',
    emailAddress: '',
    phoneNumber: 0,
  },
  shipping: {
    homeAddress: '',
    zipCode: 0,
    city: '',
    country: '',
  },
  payment: {
    isEMoney: false,
  },
};

const useCheckout = create<CheckoutStore>((set) => ({
  details: initialDetails,
  setDetails: ({ ...props }) =>
    set((state) => ({
      details: { ...state.details, props },
    })),
}));

export default useCheckout;
