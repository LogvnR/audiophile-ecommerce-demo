import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ProductContent, CartProductContent } from '../../helpers/types';
import Button from '../Button/Button';
import useCart from '../../hooks/useCart';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import stockImage from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';

const ProductInfo = ({ ...product }: ProductContent) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [item, setItem] = useState<CartProductContent>({
    id: 0,
    name: '',
    image: stockImage,
    price: 0,
    quantity: 0,
  });
  const { addToCart } = useCart();

  useEffect(() => {
    const itemToCart: CartProductContent = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
    };

    setItem(itemToCart);
  }, [quantity]);

  const addToCartHandler = () => {
    addToCart(item);
  };

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
          {product.name + ' ' + product.category}
        </h2>
        <p className="font-medium leading-6 text-black opacity-50 text-[15px]">
          {product.description}
        </p>
        <h4 className="text-lg font-bold tracking-wider text-black">
          $ {product.price.toLocaleString()}
        </h4>
        <div className="flex items-center justify-center w-full gap-4 mt-4">
          <div className="flex w-[120px] h-[48px] items-center justify-between bg-light-grey">
            <button
              className="flex items-center justify-center w-1/3 h-full bg-transparent hover:bg-black/10 disabled:hover:bg-transparent"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1 ? true : false}
            >
              <AiOutlineMinus size={12} className="text-black opacity-25" />
            </button>
            <p className="text-sm font-bold tracking-wider">{quantity}</p>
            <button
              className="flex items-center justify-center w-1/3 h-full bg-transparent hover:bg-black/10"
              onClick={() => setQuantity(quantity + 1)}
            >
              <AiOutlinePlus size={12} className="text-black opacity-25" />
            </button>
          </div>
          <Button variant="Cart" onClick={addToCartHandler} />
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
                <Button variant="Product" color="Standard" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
