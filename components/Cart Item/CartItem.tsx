import React from 'react';
import Counter from '../Counter/Counter';
import { CartProductContent } from '../../helpers/types';
import Image from 'next/image';

interface CartItemProps {
  cartItemContent: CartProductContent;
}

const CartItem = ({ cartItemContent }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Image
        className="w-[64px] h-[64px] rounded-lg"
        src={cartItemContent.image}
        alt={'Cart Item:' + ' ' + cartItemContent.name}
      />
      <div className="flex flex-col w-full">
        <h4 className="uppercase text-[15px] text-black font-Manrope font-bold">
          {cartItemContent.name}
        </h4>
        <h4 className="text-sm font-bold text-black/50 font-Manrope">
          $ {cartItemContent.price.toLocaleString()}
        </h4>
      </div>
      <div className="w-full">
        <Counter quantity={cartItemContent.quantity} type="sm" />
      </div>
    </div>
  );
};

export default CartItem;
