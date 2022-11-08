import React from 'react';

interface ButtonProps {
  type: 'Product' | 'Cart' | 'Custom';
  style?: 'Standard' | 'Black' | 'Outline';
  children?: React.ReactNode;
}

const Button = ({ type, style, children }: ButtonProps) => {
  if (type === 'Product') {
    return (
      <button
        className={`w-[160px] h-[48px] ${
          style === 'Standard'
            ? 'bg-burnt-orange text-white border border-transparent'
            : undefined
        } ${
          style === 'Black'
            ? 'bg-black text-white border border-transparent'
            : undefined
        } ${
          style === 'Outline'
            ? 'bg-transparent text-black border border-black'
            : undefined
        } font-semibold uppercase tracking tracking-wider text-sm`}
      >
        See Product
      </button>
    );
  }

  if (type === 'Cart') {
    return (
      <button className="w-[160px] h-[48px] bg-burnt-orange text-white font-semibold uppercase tracking tracking-wider text-sm">
        Add To Cart
      </button>
    );
  }

  return (
    <button className="w-full h-[48px] bg-burnt-orange font-semibold uppercase tracking tracking-wider text-sm">
      {children}
    </button>
  );
};

export default Button;
