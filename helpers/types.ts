import { StaticImageData } from 'next/image';

export type ProductContent = {
  id: number;
  category: string;
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
  referencePhoto: StaticImageData;
}
