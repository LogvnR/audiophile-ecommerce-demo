import { useState, useEffect } from 'react';
import Input from '../../Input/Input';

import { Payment } from '../../../helpers/types';
import useCheckout from '../../../hooks/useCheckout';

const Payment = () => {
  const [payment, setPayment] = useState<Payment>({
    isEMoney: true,
    eMoneyNumber: 0,
    eMoneyPin: 0,
  });

  const { setDetails } = useCheckout();

  useEffect(() => {
    setDetails(payment);
  }, [payment]);
  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        payment details
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col w-full gap-2 font-Manrope">
          <label className="text-xs font-bold tracking-tight">
            Payment Method
          </label>
          <button
            type="button"
            className={`flex gap-4 px-6 py-4 border rounded-lg  ${
              payment.isEMoney ? 'border-burnt-orange' : 'border-[#CFCFCF]'
            }`}
            onClick={() =>
              setPayment({ ...payment, isEMoney: !payment.isEMoney })
            }
          >
            <div className="w-[20px] h-[20px] border border-[#CFCFCF] rounded-full flex justify-center items-center">
              <div
                className={`w-[10px] h-[10px] ${
                  payment.isEMoney ? 'bg-burnt-orange' : 'bg-transparent'
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
              !payment.isEMoney ? 'border-burnt-orange' : 'border-[#CFCFCF]'
            }`}
            onClick={() =>
              setPayment({ ...payment, isEMoney: !payment.isEMoney })
            }
          >
            <div className="w-[20px] h-[20px] border border-[#CFCFCF] rounded-full flex justify-center items-center">
              <div
                className={`w-[10px] h-[10px] ${
                  !payment.isEMoney ? 'bg-burnt-orange' : 'bg-transparent'
                } rounded-full`}
              />
            </div>
            <p className="text-sm font-bold tracking-tight text-black bg-transparent outline-none caret-burnt-orange placeholder:text-black/40">
              Cash On Delivery
            </p>
          </button>
        </div>
        {payment.isEMoney ? (
          <>
            <Input
              onAction={(e) =>
                setPayment({
                  ...payment,
                  eMoneyNumber: Number(e.target.value.replace(/\D/, '')),
                })
              }
              title="e-Money Number"
              placeholder="238521993"
              typeOf="number"
            />
            <Input
              onAction={(e) =>
                setPayment({
                  ...payment,
                  eMoneyPin: Number(e.target.value.replace(/\D/, '')),
                })
              }
              title="e-Money PIN"
              placeholder="6891"
              typeOf="number"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
