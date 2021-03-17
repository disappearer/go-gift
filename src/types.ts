import { ImageURISource } from 'react-native';

export type StockStatus = 'in_stock' | 'no_stock' | 'stock_unknown';

export type ProductShop = {
  name: string;
  stockStatus: StockStatus;
  price: number;
};

export type Product = {
  name: string;
  description: string;
  image: ImageURISource;
  shopsAvailableIn: ProductShop[];
};
