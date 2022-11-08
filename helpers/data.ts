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

import zx9 from '../assets/product-zx9-speaker/mobile/image-product.jpg';
import zx9Gallery1 from '../assets/product-zx9-speaker/mobile/image-gallery-1.jpg';
import zx9Gallery2 from '../assets/product-zx9-speaker/mobile/image-gallery-2.jpg';
import zx9Gallery3 from '../assets/product-zx9-speaker/mobile/image-gallery-3.jpg';
import zx9Preview from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg';

import zx7 from '../assets/product-zx7-speaker/mobile/image-product.jpg';
import zx7Gallery1 from '../assets/product-zx7-speaker/mobile/image-gallery-1.jpg';
import zx7Gallery2 from '../assets/product-zx7-speaker/mobile/image-gallery-2.jpg';
import zx7Gallery3 from '../assets/product-zx7-speaker/mobile/image-gallery-3.jpg';
import zx7Preview from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg';

import yx1 from '../assets/product-yx1-earphones/mobile/image-product.jpg';
import yx1Gallery1 from '../assets/product-yx1-earphones/mobile/image-gallery-1.jpg';
import yx1Gallery2 from '../assets/product-yx1-earphones/mobile/image-gallery-2.jpg';
import yx1Gallery3 from '../assets/product-yx1-earphones/mobile/image-gallery-3.jpg';
import yx1Preview from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg';

export const data: ProductContent[] = [
  {
    id: 1,
    category: 'headphones',
    name: 'xx99 mark ii headphones',
    newProduct: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: xx99Mark2,
    price: 2999,
    features: [
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.',
      'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    ],
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
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'xx59',
        referenceCategory: 'headphones',
        referencePhoto: xx59Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
  {
    id: 2,
    category: 'headphones',
    name: 'xx99 mark i headphones',
    newProduct: false,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    image: xx99Mark1,
    price: 1750,
    features: [
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',
      'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
    ],
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
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark2Preview,
      },
      {
        referenceName: 'xx59',
        referenceCategory: 'headphones',
        referencePhoto: xx59Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
  {
    id: 3,
    category: 'headphones',
    name: 'xx59 headphones',
    newProduct: false,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    image: xx59,
    price: 899,
    features: [
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.',
      'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    ],
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
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark2Preview,
      },
      {
        referenceName: 'xx99 mark i',
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
  {
    id: 4,
    category: 'speakers',
    name: 'zx9 speaker',
    newProduct: true,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    image: zx9,
    price: 4500,
    features: [
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',
      'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    ],
    included: [
      {
        item: 'speaker unit',
        quantity: 2,
      },
      {
        item: 'speaker cloth panel',
        quantity: 2,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: '3.5mm 10m audio cable',
        quantity: 1,
      },
      {
        item: '10m optical cable',
        quantity: 1,
      },
    ],
    productPhotos: [zx9Gallery1, zx9Gallery2, zx9Gallery3],
    productReference: [
      {
        referenceName: 'zx7 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx7Preview,
      },
      {
        referenceName: 'xx99 mark i',
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'xx59',
        referenceCategory: 'headphones',
        referencePhoto: xx59Preview,
      },
    ],
  },
  {
    id: 5,
    category: 'speakers',
    name: 'zx7 speaker',
    newProduct: false,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    image: zx7,
    price: 3500,
    features: [
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',
      'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    ],
    included: [
      {
        item: 'speaker unit',
        quantity: 2,
      },
      {
        item: 'speaker cloth panel',
        quantity: 2,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: '3.5mm 7.5m audio cable',
        quantity: 1,
      },
      {
        item: '7.5m optical cable',
        quantity: 1,
      },
    ],
    productPhotos: [zx7Gallery1, zx7Gallery2, zx7Gallery3],
    productReference: [
      {
        referenceName: 'zx9 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx9Preview,
      },
      {
        referenceName: 'xx99 mark i',
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'xx59',
        referenceCategory: 'headphones',
        referencePhoto: xx59Preview,
      },
    ],
  },
  {
    id: 6,
    category: 'earphones',
    name: 'yx1 earphones',
    newProduct: true,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    image: yx1,
    price: 599,
    features: [
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    ],
    included: [
      {
        item: 'earphone unit',
        quantity: 2,
      },
      {
        item: 'multi-size earplugs',
        quantity: 6,
      },
      {
        item: 'user manual',
        quantity: 1,
      },
      {
        item: 'USB-C charging cable',
        quantity: 1,
      },
      {
        item: 'travel pouch',
        quantity: 1,
      },
    ],
    productPhotos: [yx1Gallery1, yx1Gallery2, yx1Gallery3],
    productReference: [
      {
        referenceName: 'xx99 mark i',
        referenceCategory: 'headphones',
        referencePhoto: xx99Mark1Preview,
      },
      {
        referenceName: 'xx59',
        referenceCategory: 'headphones',
        referencePhoto: xx59Preview,
      },
      {
        referenceName: 'zx9 speaker',
        referenceCategory: 'speaker',
        referencePhoto: zx9Preview,
      },
    ],
  },
];
