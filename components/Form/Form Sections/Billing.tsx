import { useState, useEffect } from 'react';
import Input from '../../Input/Input';

import { Billing } from '../../../helpers/types';
import useCheckout from '../../../hooks/useCheckout';

const Billing = () => {
  const [billing, setBilling] = useState<Billing>({
    fullName: '',
    emailAddress: '',
    phoneNumber: 0,
  });

  const { setDetails } = useCheckout();

  useEffect(() => {
    setDetails(billing);
  }, [billing]);

  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        billing details
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <Input
          onAction={(e) => setBilling({ ...billing, fullName: e.target.value })}
          title="Name"
          placeholder="John Doe"
          typeOf="text"
        />
        <Input
          onAction={(e) =>
            setBilling({ ...billing, emailAddress: e.target.value })
          }
          title="Email Address"
          placeholder="example@email.com"
          typeOf="email"
        />
        <Input
          onAction={(e) =>
            setBilling({
              ...billing,
              phoneNumber: Number(e.target.value.replace(/\D/, '')),
            })
          }
          title="Phone Number"
          placeholder="+1 123-456-7890"
          typeOf="tel"
        />
      </div>
    </div>
  );
};

export default Billing;
