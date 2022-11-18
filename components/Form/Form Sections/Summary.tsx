import CartItem from '../../Cart Item/CartItem';

import useCart from '../../../hooks/useCart';
import Button from '../../Button/Button';

const Summary = () => {
  const { cart, total } = useCart();

  return (
    <div className="flex flex-col w-full gap-8 px-6 py-8 mt-8 bg-white rounded-lg">
      <h4 className="text-lg font-bold tracking-wider text-black uppercase">
        summary
      </h4>
      <section className="flex flex-col gap-6">
        {cart.map((product) => (
          <CartItem cartItemContent={product} variant="Quantity" />
        ))}
      </section>
      <section className="flex flex-col w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium leading-6 uppercase text-black/50">total</p>
          <p className="text-lg font-bold leading-6 text-black uppercase">
            $ {total.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-medium leading-6 uppercase text-black/50">
            shipping
          </p>
          <p className="text-lg font-bold leading-6 text-black uppercase">
            $ 50
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-medium leading-6 uppercase text-black/50">
            vat (included)
          </p>
          <p className="text-lg font-bold leading-6 text-black uppercase">
            $ {Math.round(total * 0.2).toLocaleString()}
          </p>
        </div>
      </section>
      <div className="flex items-center justify-between w-full">
        <p className="font-medium leading-6 uppercase text-black/50">
          grand total
        </p>
        <p className="text-lg font-bold leading-6 uppercase text-burnt-orange">
          $ {(total + 50).toLocaleString()}
        </p>
      </div>
      <Button variant="Custom">continue & pay</Button>
    </div>
  );
};

export default Summary;
