import React, { useEffect, useRef } from 'react';
import {
  Animated,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import CloseIcon from '../Icons/CloseIcon';
import Text from '../../components/Text';
import { ProductShop } from '../../types';
import Shop from './Shop/Shop';
import { styles } from './styles';

const SHOP_MENU_ANIMATION_DURATION = 200;

type Props = {
  shops: ProductShop[];
  onClose: () => void;
};
const ShopMenu: React.FC<Props> = ({ shops, onClose }) => {
  const { height: windowHeight } = useWindowDimensions();

  const shopMenuAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(shopMenuAnimation, {
      toValue: 1,
      duration: SHOP_MENU_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const id = shopMenuAnimation.addListener(({ value }) => {
      if (value === 0) {
        onClose();
      }
    });

    return () => shopMenuAnimation.removeListener(id);
  }, []);

  const overlayOpacity = shopMenuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
    extrapolate: 'clamp',
  });

  const shopMenuHeight = 60 + shops.length * 50;

  const shopMenuTranslate = shopMenuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [shopMenuHeight, 0],
    extrapolate: 'clamp',
  });

  const closeShopMenu = () => {
    Animated.timing(shopMenuAnimation, {
      toValue: 0,
      duration: SHOP_MENU_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Animated.View
        style={{
          ...styles.shopMenuOverlay,
          opacity: overlayOpacity,
          height: windowHeight,
        }}
      />
      <Animated.View
        style={{
          ...styles.shopMenuWrapper,
          transform: [{ translateY: shopMenuTranslate }],
        }}
      >
        <View style={styles.shopMenuTitleRow}>
          <Text fontSize={12}>Shops</Text>
          <TouchableOpacity
            style={{ position: 'absolute', top: 0, right: 0 }}
            onPress={closeShopMenu}
          >
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <>
          {shops.map((shop) => (
            <Shop key={shop.name} shop={shop} />
          ))}
        </>
      </Animated.View>
    </>
  );
};

// Menu height: (14 + 19.5 = 33.5) + (9.5 + 16 + 1 = 26.5) + x * 50 = 60 + x * 50

export default ShopMenu;
