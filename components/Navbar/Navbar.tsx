import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Modal, Drawer } from '@mantine/core';
import Image from 'next/image';

import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/tablet/icon-hamburger.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import ShopCategories from '../Shop Categories/ShopCategories';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import { ProductContent, CartProductContent } from '../../helpers/types';

interface NavbarProps {
  variant: 'transparent' | 'black';
}

const Navbar = ({ variant }: NavbarProps) => {
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [menuModal, setMenuModal] = useState<boolean>(false);
  const { totalItems } = useCart();

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
        <Cart />
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
        <button
          onClick={() => setCartModal(true)}
          className="w-[23px] h-[20px] relative"
        >
          <Image src={cart} alt="My Cart" width={23} height={20} />
          {totalItems > 0 ? (
            <div className="w-[16px] h-[16px] absolute -top-3 -right-3 bg-burnt-orange rounded-full flex justify-center items-center text-white text-[10px]">
              {totalItems < 10 ? totalItems : '9+'}
            </div>
          ) : null}
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
