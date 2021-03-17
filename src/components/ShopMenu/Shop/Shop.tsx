import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ProductShop, StockStatus } from '../../../types';
import InStockIcon from '../../InStockIcon';
import OpenIcon from '../../OpenIcon';
import OutOfStockIcon from '../../OutOfStockIcon';
import StockUnknownIcon from '../../StockUnknownIcon';
import Text from '../../Text';
import { styles } from './styles';

const getStockStatusTextAndIconComponent = (
  stockStatus: StockStatus,
): [string, React.FC<any>] => {
  switch (stockStatus) {
    case 'in_stock':
      return ['In stock', InStockIcon];
    case 'no_stock':
      return ['Out of stock', OutOfStockIcon];
    default:
      return ['Stock unknown', StockUnknownIcon];
  }
};

type Props = {
  shop: ProductShop;
};
const Shop: React.FC<Props> = ({ shop: { name, price, stockStatus } }) => {
  const [stockText, StockIcon] = getStockStatusTextAndIconComponent(
    stockStatus,
  );

  return (
    <View style={styles.shopRow}>
      <View style={styles.shopName}>
        <Text fontSize={10} bold={true}>
          {name}
        </Text>
      </View>
      <View style={styles.productStockInfo}>
        <StockIcon />
        <Text fontSize={8} bold={true} style={styles.productStockText}>
          {stockText}
        </Text>
      </View>
      <View style={styles.price}>
        <Text fontSize={12} bold={true}>
          {`${price} DKK`}
        </Text>
      </View>
      <View style={styles.openIconWrapper}>
        <TouchableOpacity style={styles.openIcon}>
          <OpenIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shop;
