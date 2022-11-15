import React from 'react';
import Input from '../../Input/Input';

const Billing = () => {
  return (
    <div className="w-full my-8 font-Manrope">
      <h4 className="text-sm font-bold leading-6 tracking-wider uppercase text-burnt-orange">
        billing details
      </h4>
      <div className="flex flex-col gap-5 mt-5">
        <Input title="Name" placeholder="John Doe" typeOf="text" />
        <Input
          title="Email Address"
          placeholder="example@email.com"
          typeOf="email"
        />
        <Input
          title="Phone Number"
          placeholder="+1 123-456-7890"
          typeOf="tel"
        />
      </div>
    </div>
  );
};

export default Billing;
