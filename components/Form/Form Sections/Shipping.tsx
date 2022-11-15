import React from 'react';
import Input from '../../Input/Input';

const Shipping = () => {
  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        shipping info
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <Input
          title="Your Address"
          placeholder="1137 Williams Avenue"
          typeOf="text"
        />
        <Input title="Zip Code" placeholder="10001" typeOf="number" />
        <Input title="City" placeholder="New York City" typeOf="text" />
        <Input title="County" placeholder="United States" typeOf="text" />
      </div>
    </div>
  );
};

export default Shipping;
