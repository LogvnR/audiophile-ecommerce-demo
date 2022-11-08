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
      <section className="flex flex-col gap-5 mb-16">
        <Image src={product.image} alt={product.name} priority />
        {product.newProduct ? (
          <p className="text-sm text-burnt-orange uppercase tracking-[10px]">
            new product
          </p>
        ) : null}
        <h2 className="text-2xl font-bold tracking-wider text-black uppercase">
          {product.name}
        </h2>
        <p className="font-medium leading-6 text-black opacity-50 text-[15px]">
          {product.description}
        </p>
        <h4 className="text-lg font-bold tracking-wider text-black">
          $ {product.price.toLocaleString()}
        </h4>
        <div className="flex items-center justify-center w-full gap-4 mt-4">
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
      <section className="mb-16">
        <h3 className="mb-5 text-2xl font-bold leading-9 tracking-wider text-center text-black uppercase">
          you may also like
        </h3>
        <div className="flex flex-col w-full">
          {product.productReference.map((additional) => (
            <div className="flex flex-col items-center w-full mb-16 gap-y-6">
              <Image
                src={additional.referencePhoto}
                alt={`Reference Photo for ${additional.referenceName}`}
              />
              <h4 className="text-2xl font-bold leading-9 tracking-wider text-center text-black uppercase ">
                {additional.referenceName}
              </h4>
              <Link
                href={`/products/${product.category}/${
                  additional.referenceCategory === 'speaker'
                    ? additional.referenceName.replace(/\s/g, '-')
                    : additional.referenceName.replace(/\s/g, '-') +
                      '-' +
                      additional.referenceCategory
                }`}
              >
                <Button type="Product" style="Standard" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
