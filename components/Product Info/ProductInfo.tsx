import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ProductContent } from '../../helpers/types';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';

const ProductInfo = ({ ...product }: ProductContent) => {
  return (
    <>
      <section className="w-full min-h-[65px] flex items-center">
        <Link href={`/products/${product?.category}`}>
          <p className="text-base font-medium text-black capitalize opacity-50">
            go back
          </p>
        </Link>
      </section>
      <section className="mb-16">
        <Image src={product.image} alt={product.name} priority />
        <p>new product</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h4>$ {product.price.toLocaleString()}</h4>
        <div className="flex items-center justify-center w-full gap-4">
          <Counter />
          <Button type="Cart" />
        </div>
      </section>
      <section className="mb-16">
        <h3 className="mb-5 text-2xl font-bold leading-9 tracking-wider text-black uppercase">
          features
        </h3>
        <div className="flex flex-col w-full gap-y-6">
          {product.features.map((feature) => (
            <p className="font-medium leading-6 text-black opacity-50 text-[15px]">
              {feature}
            </p>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h3 className="mb-5 text-2xl font-bold leading-9 tracking-wider text-black uppercase">
          in the box
        </h3>
        <div className="flex flex-col w-full gap-y-3">
          {product.included.map((includes) => (
            <div className="flex gap-6">
              <p className="font-bold leading-6 text-burnt-orange">
                {includes.quantity}x
              </p>
              <p className="font-medium leading-6 text-black capitalize opacity-50">
                {includes.item}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16">
        {product.productPhotos.map((photo) => (
          <Image src={photo} alt="Product Photo" className="mb-5 rounded-lg" />
        ))}
      </section>
    </>
  );
};

export default ProductInfo;
