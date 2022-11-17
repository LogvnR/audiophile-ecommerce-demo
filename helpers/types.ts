import { StaticImageData } from 'next/image';

export type ProductContent = {
  id: number;
  category: 'headphones' | 'speakers' | 'earphones';
  name: string;
  newProduct: boolean;
  description: string;
  image: StaticImageData;
  price: number;
  features: string[];
  included: Included[];
  productPhotos: StaticImageData[];
  productReference: ProductReference[];
};

interface Included {
  item: string;
  quantity: number;
}

interface ProductReference {
  referenceName: string;
  referenceCategory: 'headphones' | 'speaker' | 'earphones';
  referencePhoto: StaticImageData;
}

export type CartProductContent = {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  quantity: number;
};

export type UserCheckoutDetails = {
  billing: Billing;
  shipping: Shipping;
  payment: Payment;
};

export interface Billing {
  fullName: string;
  emailAddress: string;
  phoneNumber: number;
}

export interface Shipping {
  homeAddress: string;
  zipCode: number;
  city: string;
  country: string;
}

export interface Payment {
  isEMoney: boolean;
  eMoneyNumber?: number;
  eMoneyPin?: number;
}
