import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { data } from '../../../../helpers/data';
import { ProductContent } from '../../../../helpers/types';

import Navbar from '../../../../components/Navbar/Navbar';
import Link from 'next/link';
import ProductInfo from '../../../../components/Product Info/ProductInfo';
import ShopCategories from '../../../../components/Shop Categories/ShopCategories';
import Footer from '../../../../components/Footer/Footer';

const index = () => {
  const router = useRouter();
  const productName = String(router.query.productName);

  const productSearch = productName.replaceAll('-', ' ');
  const searchedProduct = data.filter((product) => {
    return product.name === productSearch;
  });
  const product = searchedProduct;

  return (
    <main className="font-Manrope">
      <Head>
        <title>{productSearch.toUpperCase()} | Audiophile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar variant="black" />
      <div className="w-full px-6">
        {product.map((product) => (
          <ProductInfo {...product} />
        ))}
      </div>
      <ShopCategories />
      <Footer hasFooterAddition={true} />
    </main>
  );
};

export default index;
