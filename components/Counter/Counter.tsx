import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Counter = () => {
  return (
    <div className="flex w-[120px] h-[48px] items-center justify-between bg-light-grey">
      <div className="flex justify-center w-1/3 bg-transparent">
        <AiOutlineMinus size={12} className="text-black opacity-25" />
      </div>
      <p className="text-sm font-bold tracking-wider">1</p>
      <div className="flex justify-center w-1/3 bg-transparent">
        <AiOutlinePlus size={12} className="text-black opacity-25" />
      </div>
    </div>
  );
};

export default Counter;
