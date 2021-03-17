import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { ProductShop } from '../../../../types';
import Text from '../../../Text';
import { styles } from './styles';

type Props = {
  shopsAvailableIn: ProductShop[];
  onPress?: (event: GestureResponderEvent) => void;
};
const BuyButton: React.FC<Props> = ({ shopsAvailableIn, onPress }) => {
  const isAvailableInMultipleShops = shopsAvailableIn.length > 1;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text fontSize={11} style={{ color: '#fff' }}>
        {isAvailableInMultipleShops ? 'FOUND ON ' : 'BUY NOW ON '}
      </Text>
      <Text fontSize={11} bold={true} style={{ color: '#fff' }}>
        {isAvailableInMultipleShops
          ? `${shopsAvailableIn.length} SHOPS`
          : shopsAvailableIn[0].name}
      </Text>
    </TouchableOpacity>
  );
};

export default BuyButton;
