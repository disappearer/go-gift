import { Product } from './types';

export const IMAGE_HEIGHT = 448;

export const PRODUCTS: Product[] = [
  {
    name: 'Royal Copenhagen Riflet kontrast krus',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.`,
    image: require('../assets/pillow1.jpeg'),
    shopsAvailableIn: [
      { name: 'ELLOS.COM', stockStatus: 'in_stock', price: 79.95 },
    ],
  },
  {
    name: 'Air Zoom Pegasus 37',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.`,
    image: require('../assets/pillow2.jpg'),

    shopsAvailableIn: [
      { name: 'Some shop 1', stockStatus: 'in_stock', price: 79.95 },
      { name: 'Some shop 2', stockStatus: 'stock_unknown', price: 179.95 },
      { name: 'Some shop 3', stockStatus: 'no_stock', price: 789.95 },
    ],
  },
  {
    name: 'Some Product',
    image: require('../assets/pillow3.jpeg'),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    shopsAvailableIn: [
      { name: 'Some shop 11', stockStatus: 'stock_unknown', price: 49.95 },
      { name: 'Some shop 21', stockStatus: 'in_stock', price: 39.95 },
    ],
  },
];
