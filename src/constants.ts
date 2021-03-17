import { Product } from './types';

export const IMAGE_HEIGHT = 448;

export const PRODUCTS: Product[] = [
  {
    name: 'Royal Copenhagen Riflet kontrast krus',
    description:
      'Gør dine løbeture endnu bedre med Nike Air Zoom Pegasus 37. Med utrolig React-stødabsorbering og en ny Air-enhed i forfoden er de som et koffeinlyn til dine ben. Den lette overdel ånder helt utrolig godt. Den trimmede, perfekt placeret polstring hjælper med at eliminere hotspots. Og ydersålen med super godt greb? Tja, man skal holde sig på benene for at kunne løbe. Lad mudderet flyve og gaderne forsvinde bag dig.',
    image: require('../assets/pillow1.jpeg'),
    shopsAvailableIn: [
      { name: 'ELLOS.COM', stockStatus: 'in_stock', price: 79.95 },
    ],
  },
  {
    name: 'Air Zoom Pegasus 37',
    description:
      'Gør dine løbeture endnu bedre med Nike Air Zoom Pegasus 37. Med utrolig React-stødabsorbering og en ny Air-enhed i forfoden er de som et koffeinlyn til dine ben. Den lette overdel ånder helt utrolig godt.',

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
    description:
      'Gør dine løbeture endnu bedre med Nike Air Zoom Pegasus 37. Med utrolig React-stødabsorbering og en ny Air-enhed i forfoden er de som et koffeinlyn til dine ben. Den lette overdel ånder helt utrolig godt. Den trimmede, perfekt placeret polstring hjælper med at eliminere hotspots. Og ydersålen med super godt greb? Tja, man skal holde sig på benene for at kunne løbe. Lad mudderet flyve og gaderne forsvinde bag dig. Og ydersålen med super godt greb? Tja, man skal holde sig på benene for at kunne løbe. Lad mudderet flyve og gaderne forsvinde bag dig.',

    shopsAvailableIn: [
      { name: 'Some shop 11', stockStatus: 'stock_unknown', price: 49.95 },
      { name: 'Some shop 21', stockStatus: 'in_stock', price: 39.95 },
    ],
  },
];
