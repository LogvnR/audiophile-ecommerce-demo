import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ProductContent } from '../../helpers/types';

const ProductInfo = ({ ...product }: ProductContent) => {
  return (
    <>
      <div className="w-full min-h-[65px] flex items-center">
        <Link href={`/products/${product?.category}`}>
          <p className="text-base font-medium text-black capitalize opacity-50">
            go back
          </p>
        </Link>
      </div>
      <div>
        <Image src={product.image} alt={product.name} priority />
        <p>new product</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
      </div>
    </>
  );
};

export default ProductInfo;
