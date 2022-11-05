import Image from 'next/image';
import logo from '../../assets/shared/desktop/logo.svg';
import menu from '../../assets/shared/tablet/icon-hamburger.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg';
import Link from 'next/link';

interface NavbarProps {
  variant: 'transparent' | 'black';
}

const Navbar = ({ variant }: NavbarProps) => {
  return (
    <nav
      className={`w-full bg-${variant} h-[90px] flex justify-center items-center px-6 border-b border-[#979797]/50`}
    >
      <Image src={menu} alt="Side Menu" width={16} height={15} />
      <div className="flex items-center justify-center w-full">
        <Link href="/">
          <Image src={logo} alt="audiophile.com" width={143} height={25} />
        </Link>
      </div>
      <Image src={cart} alt="My Cart" width={23} height={20} />
    </nav>
  );
};

export default Navbar;
