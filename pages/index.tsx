import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';

import headerPhoto from '../assets/home/mobile/image-header.jpg';
import speakerPhoto from '../assets/home/mobile/image-speaker-zx9.png';
import earphonesPhoto from '../assets/home/mobile/image-earphones-yx1.jpg';

import Button from '../components/Button/Button';
import ShopCategories from '../components/Shop Categories/ShopCategories';

const Home = () => {
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

      <div className="box-border flex flex-col w-full gap-8 px-6 my-32">
        {/* == Orange ZX9 Speaker Card */}
        <div className="relative w-full rounded-lg h-[600px] bg-burnt-orange bg-home-circles bg-contain bg-top bg-no-repeat overflow-hidden ">
          <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full min-h-full font-Manrope">
            <Image
              src={speakerPhoto}
              alt="Speaker Photo"
              className="w-[172px] h-[207px]"
            />
            <h2 className="w-2/3 my-5 text-4xl font-bold tracking-wider text-center text-white uppercase">
              zx9 speaker
            </h2>
            <p className="mb-6 text-base font-medium text-center text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button type="Product" style="Black" />
          </div>
        </div>
        {/* == Grey ZX7 Speaker Card */}
        <div className="w-full rounded-lg h-[320px] bg-home-zx7 bg-cover flex flex-col justify-center px-6 gap-8">
          <h2 className="text-3xl font-bold tracking-wider text-black uppercase font-Manrope">
            zx7 speaker
          </h2>
          <Button type="Product" style="Outline" />
        </div>
        {/* == Dual Yx1 Earphones Card */}
        <div className="w-full h-[424px] flex flex-col gap-6">
          <Image
            src={earphonesPhoto}
            alt="Earphones Photo"
            className="rounded-lg"
          />
          <div className="w-full h-[200px] bg-light-grey rounded-lg flex flex-col justify-center px-6 gap-8">
            <h2 className="text-3xl font-bold tracking-wider text-black uppercase font-Manrope">
              yx1 earphones
            </h2>
            <Button type="Product" style="Outline" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
