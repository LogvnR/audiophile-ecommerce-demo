import { ProductContent } from './types';

import xx99Mark1 from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
import xx99Mark1Gallery1 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg';
import xx99Mark1Gallery2 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg';
import xx99Mark1Gallery3 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg';
import xx99Mark1Preview from '../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg';

import xx99Mark2 from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import xx99Mark2Gallery1 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import xx99Mark2Gallery2 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import xx99Mark2Gallery3 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';
import xx99Mark2Preview from '../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg';

import xx59 from '../assets/product-xx59-headphones/mobile/image-product.jpg';
import xx59Gallery1 from '../assets/product-xx59-headphones/mobile/image-gallery-1.jpg';
import xx59Gallery2 from '../assets/product-xx59-headphones/mobile/image-gallery-2.jpg';
import xx59Gallery3 from '../assets/product-xx59-headphones/mobile/image-gallery-3.jpg';
import xx59Preview from '../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg';

import zx9Preview from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';

export const data: ProductContent[] = [
  {
    id: 1,
    category: 'headphones',
    name: 'xx99 mark ii headphones',
    newProduct: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: xx99Mark2,
    price: '2,999',
    featureOne:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
    featureTwo:
      'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    included: [
      {
        item: 'headphone unit',
        quantity: 1,
      },
      {
        item: 'replacement earcups',
        quantity: 2,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: '3.5mm 5m audio cable',
        quantity: 1,
      },
      {
        item: 'travel bag',
        quantity: 1,
      },
    ],
    productPhotos: [xx99Mark2Gallery1, xx99Mark2Gallery2, xx99Mark2Gallery3],
    productReference: [
      {
        referenceName: 'xx99 mark i',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'xx59',
        referencePhoto: xx59Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
  {
    id: 2,
    category: 'headphones',
    name: 'xx59 headphones',
    newProduct: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    image: xx99Mark1,
    price: '1,750',
    featureOne:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
    featureTwo:
      'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    included: [
      {
        item: 'headphone unit',
        quantity: 1,
      },
      {
        item: 'replacement earcups',
        quantity: 2,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: '3.5mm 5m audio cable',
        quantity: 1,
      },
    ],
    productPhotos: [xx99Mark1Gallery1, xx99Mark1Gallery2, xx99Mark1Gallery3],
    productReference: [
      {
        referenceName: 'xx99 mark ii',
        referencePhoto: xx99Mark2Preview,
      },
      {
        referenceName: 'xx59',
        referencePhoto: xx59Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
  {
    id: 3,
    category: 'headphones',
    name: 'xx99 mark i headphones',
    newProduct: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    image: xx59,
    price: '899',
    featureOne:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
    featureTwo:
      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    included: [
      {
        item: 'headphone unit',
        quantity: 1,
      },
      {
        item: 'replacement earcups',
        quantity: 2,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: '3.5mm 5m audio cable',
        quantity: 1,
      },
    ],
    productPhotos: [xx59Gallery1, xx59Gallery2, xx59Gallery3],
    productReference: [
      {
        referenceName: 'xx99 mark ii',
        referencePhoto: xx99Mark2Preview,
      },
      {
        referenceName: 'xx99 mark i',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
];
