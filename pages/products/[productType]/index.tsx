import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '../../../components/Navbar/Navbar';
import ProductCard from '../../../components/Product Card/ProductCard';

import { data } from '../../../helpers/data';

import ShopCategories from '../../../components/Shop Categories/ShopCategories';
import Footer from '../../../components/Footer/Footer';

const headphones = () => {
  const router = useRouter();
  const productType = String(router.query.productType);

  const productsAvailable = data.filter((product) => {
    return product.category === productType;
  });

  return (
    <main>
      <Head>
        <title>Headphones | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar variant="black" />
      <div className="w-full bg-black min-h-[102px] flex justify-center items-center">
        <h1 className="text-3xl font-bold tracking-wider text-white uppercase font-Manrope">
          {productType}
        </h1>
      </div>
      <div className="flex flex-col w-full gap-32 px-6 my-24">
        {productsAvailable.map((product) => (
          <ProductCard
            name={product.name}
            description={product.description}
            newProduct={product.newProduct}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
      <ShopCategories />
      <Footer hasFooterAddition={true} />
    </main>
  );
};

export default headphones;