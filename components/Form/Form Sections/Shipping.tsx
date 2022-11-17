import { useState, useEffect } from 'react';
import Input from '../../Input/Input';

import { Shipping } from '../../../helpers/types';
import useCheckout from '../../../hooks/useCheckout';

const Shipping = () => {
  const [shipping, setShipping] = useState<Shipping>({
    homeAddress: '',
    zipCode: 0,
    city: '',
    country: '',
  });

  const { setDetails } = useCheckout();

  useEffect(() => {
    setDetails(shipping);
  }, [shipping]);

  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        shipping info
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <Input
          onAction={(e) =>
            setShipping({ ...shipping, homeAddress: e.target.value })
          }
          title="Your Address"
          placeholder="1137 Williams Avenue"
          typeOf="text"
        />
        <Input
          onAction={(e) =>
            setShipping({
              ...shipping,
              zipCode: Number(e.target.value.replace(/\D/, '')),
            })
          }
          title="Zip Code"
          placeholder="10001"
          typeOf="number"
        />
        <Input
          onAction={(e) => setShipping({ ...shipping, city: e.target.value })}
          title="City"
          placeholder="New York City"
          typeOf="text"
        />
        <Input
          onAction={(e) =>
            setShipping({ ...shipping, country: e.target.value })
          }
          title="County"
          placeholder="United States"
          typeOf="text"
        />
      </div>
    </div>
  );
};

export default Shipping;
