import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
interface CounterProps {
  type: 'lg' | 'sm';
  quantity: number;
  counterFn?: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ type, quantity, counterFn }: CounterProps) => {
  return (
    <div
      className={`flex ${
        type === 'lg' ? 'w-[120px] h-[48px]' : 'w-[96px] h-[32px]'
      } items-center justify-between bg-light-grey`}
    >
      <div className="flex justify-center w-1/3 bg-transparent">
        <AiOutlineMinus size={12} className="text-black opacity-25" />
      </div>
      <p className="text-sm font-bold tracking-wider">{quantity}</p>
      <div className="flex justify-center w-1/3 bg-transparent">
        <AiOutlinePlus size={12} className="text-black opacity-25" />
      </div>
    </div>
  );
};

export default Counter;
