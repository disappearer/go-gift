import Constants from 'expo-constants';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Product, ProductShop } from '../../types';
import Text from '../Text';
import BuyButton from './BuyButton';
import { styles } from './styles';

const getLowestPrice = (shops: ProductShop[]) => {
  return shops.reduce((lowestPrice, { price }) => {
    return price < lowestPrice ? price : lowestPrice;
  }, Infinity);
};

const BUTTON_WRAPPER_SIZE = 110; // calculated from styles

type Props = {
  scrollYPosition: Animated.Value;
  paddingTop: number;
  product: Product;
  onBuyClick: () => void;
};
const ProductInfo: React.FC<Props> = ({
  scrollYPosition,
  paddingTop,
  product,
  onBuyClick,
}) => {
  const { width, height: windowHeight } = useWindowDimensions();
  const { height: screenHeight } = Dimensions.get('screen');

  const { statusBarHeight } = Constants;
  const navigationBarHeight = screenHeight - windowHeight - statusBarHeight;

  const squareRef = useRef<View>(null);
  const [distanceFromBottomOfWindow, setDistanceFromBottomOfWindow] = useState(
    0,
  );
  const [isRealButtonVisible, setIsRealButtonVisible] = useState(false);

  const doMeasure = () => {
    if (squareRef.current) {
      squareRef.current.measure((_width, _height, _px, _py, _fx, fy) => {
        setDistanceFromBottomOfWindow(
          fy -
            screenHeight +
            navigationBarHeight +
            statusBarHeight +
            BUTTON_WRAPPER_SIZE,
        );
      });
    }
  };

  useEffect(() => {
    const id = scrollYPosition.addListener(({ value }) => {
      setIsRealButtonVisible(distanceFromBottomOfWindow - value < 0);
    });
    return () => {
      scrollYPosition.removeListener(id);
    };
  }, [distanceFromBottomOfWindow]);

  const priceString = getLowestPrice(product.shopsAvailableIn);
  const isAvailableInMultipleShops = product.shopsAvailableIn.length > 1;

  const handleBuyButtonPress = isAvailableInMultipleShops
    ? onBuyClick
    : () => {};

  return (
    <>
      <ScrollView
        style={styles.productInfo}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollYPosition,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
      >
        <View
          style={{
            paddingTop,
            paddingBottom: navigationBarHeight + 15,
          }}
        >
          <View style={styles.productNameRow}>
            <Text fontSize={16} bold={true} style={{ flex: 1 }}>
              {product.name}
            </Text>
            {!isAvailableInMultipleShops &&
              product.shopsAvailableIn[0].stockStatus === 'in_stock' && (
                <Text fontSize={12} bold={true} style={styles.inStock}>
                  In Stock
                </Text>
              )}
          </View>
          <View style={styles.productPriceRow}>
            <Text>
              {isAvailableInMultipleShops && (
                <Text fontSize={10} style={styles.from}>
                  from{' '}
                </Text>
              )}
              <Text fontSize={18} bold={true}>
                {priceString} DKK
              </Text>
            </Text>
          </View>
          <View>
            <Text fontSize={16}>{product.description}</Text>
            <Text fontSize={16}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View
            style={[styles.buttonWrapper]}
            ref={squareRef}
            onLayout={doMeasure}
          >
            <BuyButton
              shopsAvailableIn={product.shopsAvailableIn}
              onPress={handleBuyButtonPress}
            />
          </View>
          <View>
            <Text fontSize={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text fontSize={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
      </ScrollView>
      {!isRealButtonVisible && (
        <View
          style={[
            styles.buttonWrapper,
            styles.buttonWrapperAbsolute,
            { width: width - 32 },
          ]}
        >
          <BuyButton
            shopsAvailableIn={product.shopsAvailableIn}
            onPress={handleBuyButtonPress}
          />
        </View>
      )}
    </>
  );
};

export default ProductInfo;
