import Button from '../Button/Button';
import CartItem from '../Cart Item/CartItem';

import useCart from '../../hooks/useCart';
import Link from 'next/link';

const Cart = () => {
  const { cart, total, totalItems, resetCart } = useCart();

  return (
    <div className="flex flex-col w-full p-1 font-Manrope">
      <section className="flex items-center justify-between w-full mb-4">
        <h4 className="text-lg font-bold tracking-wider text-black uppercase tracking">
          cart ({totalItems})
        </h4>
        <button onClick={() => resetCart()}>
          <h4 className="font-medium leading-4 text-black border-b opacity-50 border-black/50">
            Remove all
          </h4>
        </button>
      </section>
      {cart.length > 0 ? (
        <section className="flex flex-col gap-6">
          {cart.map((product) => (
            <CartItem cartItemContent={product} variant="Counter" />
          ))}
        </section>
      ) : (
        <p className="w-full my-8 italic tracking-wide text-center text-black opacity-50">
          Your Audiophile Cart is empty.
        </p>
      )}
      <section className="flex items-center justify-between w-full my-4">
        <h4 className="font-medium leading-4 text-black uppercase opacity-50">
          total
        </h4>
        <h4 className="text-lg font-bold tracking-wider text-black uppercase tracking">
          $ {total.toLocaleString()}
        </h4>
      </section>
      <Link href="/checkout">
        <Button variant="Custom">Checkout</Button>
      </Link>
    </div>
  );
};

export default Cart;
