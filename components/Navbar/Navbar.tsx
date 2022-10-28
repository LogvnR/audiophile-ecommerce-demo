import Image from 'next/image';
import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/tablet/icon-hamburger.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
  return (
    <nav className="w-full bg-black h-[90px] flex justify-center items-center px-6 border-b border-[#979797]">
      <Image src={menu} alt="Side Menu" width={16} height={15} />
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="audiophile.com" width={143} height={25} />
      </div>
      <Image src={cart} alt="My Cart" width={23} height={20} />
    </nav>
  );
};

export default Navbar;
