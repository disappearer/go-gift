import React, { useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import AddToWishlistButton from './components/AddToWishlistButton/AddToWishlistButton';
import Carousel from './components/Carousel/Carousel';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ShopMenu from './components/ShopMenu/ShopMenu';
import { IMAGE_HEIGHT, PRODUCTS } from './constants';
import { styles } from './styles';

const imageData = PRODUCTS.map(({ name, image }) => ({ key: name, image }));

const MainScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [shopMenuActive, setShopMenuActive] = useState(false);

  const scrollYPosition = useRef(new Animated.Value(0)).current;

  const activateShopMenu = () => setShopMenuActive(true);
  const deactivateShopMenu = () => setShopMenuActive(false);

  return (
    <View style={styles.container}>
      <ProductInfo
        scrollYPosition={scrollYPosition}
        paddingTop={IMAGE_HEIGHT}
        product={PRODUCTS[currentPage]}
        onBuyClick={activateShopMenu}
      />
      <Carousel
        height={IMAGE_HEIGHT}
        scrollYPosition={scrollYPosition}
        onPageChange={setCurrentPage}
        data={imageData}
      />
      <AddToWishlistButton scrollYPosition={scrollYPosition} />
      {shopMenuActive && (
        <ShopMenu
          shops={PRODUCTS[currentPage].shopsAvailableIn}
          onClose={deactivateShopMenu}
        />
      )}
    </View>
  );
};

export default MainScreen;
