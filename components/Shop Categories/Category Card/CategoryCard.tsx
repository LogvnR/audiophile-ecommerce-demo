import Image, { StaticImageData } from 'next/image';
import { CgChevronRight } from 'react-icons/cg';
import React from 'react';

interface CategoryCardProps {
  image: StaticImageData;
  title: string;
}

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="w-full h-[217px] mb-4 flex flex-col justify-end items-center relative">
      <Image
        src={image}
        alt={title}
        className={`absolute bg-transparent ${
          title === 'Speakers'
            ? 'w-[80px] h-[104px] mt-0'
            : 'w-[135px] h-[154px] -mt-3'
        } top-0 `}
      />
      <div className="flex flex-col items-center justify-end w-full rounded-lg h-3/4 bg-light-grey">
        <h4 className="font-bold tracking-widest text-black uppercase font-Manrope">
          {title}
        </h4>
        <button className="flex items-center justify-center gap-2 my-4 font-bold tracking-wider text-black uppercase font-Manrope">
          <span className="opacity-50">Shop</span>{' '}
          <CgChevronRight size={22} className="text-burnt-orange" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
