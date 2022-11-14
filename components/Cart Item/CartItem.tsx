import { useEffect } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartProductContent } from '../../helpers/types';
import useCart from '../../hooks/useCart';
import Image from 'next/image';

interface CartItemProps {
  cartItemContent: CartProductContent;
}

const CartItem = ({ cartItemContent }: CartItemProps) => {
  const { adjustQuantity, removeItem, adjustTotal } = useCart();

  useEffect(() => {
    if (cartItemContent.quantity === 0) {
      removeItem(cartItemContent.id);
    }
  }, [cartItemContent.quantity]);

  const itemQuantityHandler = (action: 'add' | 'remove') => {
    adjustQuantity(cartItemContent.id, action);
    adjustTotal(cartItemContent.price, action);
  };

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
        <div className="flex w-[96px] h-[32px] items-center justify-between bg-light-grey">
          <button
            className="flex justify-center w-1/3 bg-transparent"
            onClick={() => itemQuantityHandler('remove')}
          >
            <AiOutlineMinus size={12} className="text-black opacity-25" />
          </button>
          <p className="text-sm font-bold tracking-wider">
            {cartItemContent.quantity}
          </p>
          <button
            className="flex justify-center w-1/3 bg-transparent"
            onClick={() => itemQuantityHandler('add')}
          >
            <AiOutlinePlus size={12} className="text-black opacity-25" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
