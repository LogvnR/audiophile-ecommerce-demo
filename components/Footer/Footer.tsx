import Image from 'next/image';
import React from 'react';

import logo from '../../assets/shared/desktop/logo.svg';
import headphoneUser from '../../assets/shared/mobile/image-best-gear.jpg';
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr';

interface FooterProps {
  hasFooterAddition: boolean;
}

const Footer = ({ hasFooterAddition }: FooterProps) => {
  return (
    <>
      {hasFooterAddition ? (
        <div className="w-full px-6 mb-36 font-Manrope">
          <Image
            src={headphoneUser}
            alt="Headphone User"
            className="rounded-lg"
          />
          <h3 className="my-8 text-3xl font-bold text-center uppercase">
            Bringing you the <span className="text-burnt-orange">best </span>
            audio gear
          </h3>
          <p className="text-[15px] font-medium leading-6 text-center opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      ) : null}
      <footer className="w-full bg-off-black min-h-[654px] flex flex-col items-center justify-between font-Manrope text-white px-6">
        <div className="w-[101px] h-[4px] bg-burnt-orange" />
        <Image src={logo} alt="audiophile.com" width={143} height={25} />
        <div className="flex flex-col gap-5 text-sm font-bold tracking-wider text-center uppercase">
          <p>Home</p>
          <p>Headphones</p>
          <p>Speakers</p>
          <p>Earphones</p>
        </div>
        <p className="text-sm font-medium leading-6 text-center opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <p className="text-base font-bold leading-6 opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex gap-5 mb-12 text-white">
          <GrFacebook size={24} />
          <GrTwitter size={24} />
          <GrInstagram size={24} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
