import Link from 'next/link';
import { useState } from 'react';
import { Modal, Drawer } from '@mantine/core';
import Image from 'next/image';

import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/tablet/icon-hamburger.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import Button from '../Button/Button';
import ShopCategories from '../Shop Categories/ShopCategories';

interface NavbarProps {
  variant: 'transparent' | 'black';
}

const Navbar = ({ variant }: NavbarProps) => {
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [menuModal, setMenuModal] = useState<boolean>(false);
  return (
    <>
      <Modal
        size={327}
        opened={cartModal}
        onClose={() => setCartModal(false)}
        withCloseButton={false}
        className="mt-12"
        overlayBlur={3}
      >
        <div className="flex flex-col w-full font-Manrope p-2">
          <section className="flex w-full justify-between items-center mb-4">
            <h4 className="font-bold text-black uppercase text-lg tracking tracking-wider">
              cart (3)
            </h4>
            <h4 className="font-medium text-black opacity-50 leading-4 border-b border-black/50">
              Remove all
            </h4>
          </section>
          <p className="text-center w-full text-black opacity-50 tracking-wide my-8 italic">
            Your Audiophile Cart is empty.
          </p>
          <section className="flex w-full justify-between items-center my-4">
            <h4 className="font-medium text-black opacity-50 leading-4 uppercase">
              total
            </h4>
            <h4 className="font-bold text-black uppercase text-lg tracking tracking-wider">
              $ 9,999
            </h4>
          </section>
          <Button type="Custom">Checkout</Button>
        </div>
      </Modal>

      <nav
        className={`w-full bg-${variant} h-[90px] flex justify-center items-center px-6 border-b border-[#979797]/50`}
      >
        <button onClick={() => setMenuModal(true)}>
          <Image src={menu} alt="Side Menu" width={16} height={15} />
        </button>

        <div className="flex items-center justify-center w-full">
          <Link href="/">
            <Image src={logo} alt="audiophile.com" width={143} height={25} />
          </Link>
        </div>
        <button onClick={() => setCartModal(true)}>
          <Image src={cart} alt="My Cart" width={23} height={20} />
        </button>
      </nav>
      <Drawer
        opened={menuModal}
        onClose={() => setMenuModal(false)}
        overlayOpacity={0}
        withCloseButton={false}
        className="overflow-y-scroll"
      >
        <ShopCategories />
      </Drawer>
    </>
  );
};

export default Navbar;
