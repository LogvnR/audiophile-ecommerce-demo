import React from 'react';
import Billing from './Form Sections/Billing';
import Payment from './Form Sections/Payment';
import Shipping from './Form Sections/Shipping';

const Form = () => {
  return (
    <>
      <form className="w-full px-6 py-8 bg-white rounded-lg">
        <h2 className="text-3xl font-bold tracking-wider uppercase">
          checkout
        </h2>
        <Billing />
        <Shipping />
        <Payment />
      </form>
    </>
  );
};

export default Form;
