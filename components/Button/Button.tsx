import { DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'Product' | 'Cart' | 'Custom';
  color?: 'Standard' | 'Black' | 'Outline';
  children?: React.ReactNode;
}

const Button = ({ variant, color, children, ...props }: ButtonProps) => {
  if (variant === 'Product') {
    return (
      <button
        className={`w-[160px] h-[48px] ${
          color === 'Standard'
            ? 'bg-burnt-orange text-white border border-transparent'
            : undefined
        } ${
          color === 'Black'
            ? 'bg-black text-white border border-transparent'
            : undefined
        } ${
          color === 'Outline'
            ? 'bg-transparent text-black border border-black'
            : undefined
        } font-semibold uppercase tracking tracking-wider text-sm`}
      >
        See Product
      </button>
    );
  }

  if (variant === 'Cart') {
    return (
      <button
        className="w-[160px] h-[48px] bg-burnt-orange text-white font-semibold uppercase tracking tracking-wider text-sm"
        {...props}
      >
        Add To Cart
      </button>
    );
  }

  return (
    <button className="w-full h-[48px] bg-burnt-orange text-white font-semibold uppercase tracking tracking-wider text-sm">
      {children}
    </button>
  );
};

export default Button;
