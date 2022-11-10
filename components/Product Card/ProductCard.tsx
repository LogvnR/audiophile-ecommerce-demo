import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '../Button/Button';

interface ProductCardProps {
  name: string;
  newProduct: boolean;
  description: string;
  image: StaticImageData;
  category: string;
}

const ProductCard = ({
  name,
  newProduct,
  description,
  image,
  category,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center font-Manrope">
      <Image src={image} alt={name} className="rounded-lg" />
      {newProduct ? (
        <p className="mt-6 text-sm tracking-[10px] uppercase text-burnt-orange">
          new product
        </p>
      ) : null}
      <h4 className="w-2/3 my-6 text-2xl font-bold text-center text-black uppercase">
        {name + ' ' + category}
      </h4>
      <p className="mb-8 font-medium leading-6 text-center text-black opacity-50">
        {description}
      </p>
      <Link href={`/products/${category}/${name.replace(/\s/g, '-')}`}>
        <Button variant="Product" color="Standard" />
      </Link>
    </div>
  );
};

export default ProductCard;
