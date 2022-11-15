import { useState } from 'react';
import Input from '../../Input/Input';

const Payment = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        shipping info
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col w-full gap-2 font-Manrope">
          <label className="text-xs font-bold tracking-tight">
            Payment Method
          </label>
          <button
            type="button"
            className={`flex gap-4 px-6 py-4 border rounded-lg  ${
              isSelected ? 'border-burnt-orange' : 'border-[#CFCFCF]'
            }`}
            onClick={() => setIsSelected(!isSelected)}
          >
            <div className="w-[20px] h-[20px] border border-[#CFCFCF] rounded-full flex justify-center items-center">
              <div
                className={`w-[10px] h-[10px] ${
                  isSelected ? 'bg-burnt-orange' : 'bg-transparent'
                } rounded-full`}
              />
            </div>
            <p className="text-sm font-bold tracking-tight text-black bg-transparent outline-none caret-burnt-orange placeholder:text-black/40">
              e-Money
            </p>
          </button>
          <button
            type="button"
            className={`flex gap-4 px-6 py-4 border rounded-lg  ${
              !isSelected ? 'border-burnt-orange' : 'border-[#CFCFCF]'
            }`}
            onClick={() => setIsSelected(!isSelected)}
          >
            <div className="w-[20px] h-[20px] border border-[#CFCFCF] rounded-full flex justify-center items-center">
              <div
                className={`w-[10px] h-[10px] ${
                  !isSelected ? 'bg-burnt-orange' : 'bg-transparent'
                } rounded-full`}
              />
            </div>
            <p className="text-sm font-bold tracking-tight text-black bg-transparent outline-none caret-burnt-orange placeholder:text-black/40">
              Cash On Delivery
            </p>
          </button>
        </div>
        {isSelected ? (
          <>
            <Input
              title="e-Money Number"
              placeholder="238521993"
              typeOf="number"
            />
            <Input title="e-Money PIN" placeholder="6891" typeOf="number" />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
