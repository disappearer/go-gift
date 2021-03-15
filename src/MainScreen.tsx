import React, { useRef, useState } from 'react';
import {
  Animated, View
} from 'react-native';
import Carousel from './components/Carousel/Carousel';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { styles } from './styles';

const IMAGE_HEIGHT = 448;

const MainScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  console.log('currentPage: ', currentPage);

  const scrollYPosition = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <ProductInfo scrollYPosition={scrollYPosition} paddingTop={IMAGE_HEIGHT} />
      <Carousel height={IMAGE_HEIGHT} scrollYPosition={scrollYPosition} onPageChange={setCurrentPage} />
    </View>
  );
};

export default MainScreen;
