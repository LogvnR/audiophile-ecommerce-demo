import React from 'react';

import headphones from '../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.png';
import speakers from '../../assets/home/mobile/image-speaker-zx9.png';
import earphones from '../../assets/product-yx1-earphones/mobile/image-category-page-preview.png';

import CategoryCard from './Category Card/CategoryCard';

const CategoryInfo = [
  {
    image: headphones,
    title: 'Headphones',
  },
  {
    image: speakers,
    title: 'Speakers',
  },
  {
    image: earphones,
    title: 'Earphones',
  },
];

const ShopCategories = () => {
  return (
    <div className="box-border w-full px-6 my-8">
      {CategoryInfo.map((category) => (
        <CategoryCard image={category.image} title={category.title} />
      ))}
    </div>
  );
};

export default ShopCategories;
