import { StaticImageData } from 'next/image';

export type ProductContent = {
  category: string;
  name: string;
  newProduct: boolean;
  description: string;
  image: StaticImageData;
  price: string;
  featureOne: string;
  featureTwo: string;
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
