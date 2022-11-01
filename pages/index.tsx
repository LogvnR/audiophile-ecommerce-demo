import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';

import headerPhoto from '../assets/home/mobile/image-header.jpg';
import Button from '../components/Button/Button';
import ShopCategories from '../components/Shop Categories/ShopCategories';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Audiophile | Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full">
        <Image
          className="-z-10"
          src={headerPhoto}
          alt="Header Photo"
          priority
        />
        <div className="absolute top-0 flex flex-col w-full">
          <Navbar variant="transparent" />
          <div className="flex flex-col items-center w-full mt-32 text-white font-Manrope">
            <p className="text-sm tracking-[10px] uppercase opacity-50 ">
              new product
            </p>
            <h2 className="my-4 text-4xl font-bold tracking-wider text-center uppercase">
              XX99 Mark II HeadphoneS
            </h2>
            <p className="w-3/4 mb-8 font-medium leading-7 text-center opacity-75 text-normal">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button type="Product" style="Standard" />
          </div>
        </div>
      </div>
      <ShopCategories />
    </main>
  );
}
