import React from 'react';
import {
  Animated, ScrollView, View
} from 'react-native';
import { styles } from './styles';
import Text from '../Text';

type Props = {
  scrollYPosition: Animated.Value;
  paddingTop: number;
};
const ProductInfo: React.FC<Props> = ({ scrollYPosition, paddingTop }) => {
  return (
    <ScrollView
      style={styles.productInfo}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: scrollYPosition,
            },
          },
        },
      ])}
    >
      <View
        style={{
          paddingTop,
        }}
      >
        <Text fontSize={16} bold={true}>Air Zoom Pegasus 37</Text>
      </View>
    </ScrollView>
  );
};

export default ProductInfo;
