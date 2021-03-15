import React, { useState } from 'react';
import {
  Animated, NativeScrollEvent,
  NativeSyntheticEvent, useWindowDimensions, View
} from 'react-native';
import { styles } from './styles';

const data = [
  { key: '1', image: require('../../../assets/pillow1.jpeg') },
  { key: '2', image: require('../../../assets/pillow2.jpg') },
  { key: '3', image: require('../../../assets/pillow3.jpeg') },
];

const IMAGE_MIN_HEIGHT_TO_WINDOW_HEIGHT_RATIO = 0.2;

type Props = {
  scrollYPosition: Animated.Value;
  height: number;
  onPageChange: (pageNumber: number) => void;
};
const Carousel: React.FC<Props> = ({ scrollYPosition, height, onPageChange }) => {
  const { width, height: windowHeight } = useWindowDimensions();
  const imageMinHeight = windowHeight * IMAGE_MIN_HEIGHT_TO_WINDOW_HEIGHT_RATIO;
  const imageScrollDistance = height - imageMinHeight;

  const imageViewTranslate = scrollYPosition.interpolate({
    inputRange: [0, imageScrollDistance],
    outputRange: [0, -imageScrollDistance],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollYPosition.interpolate({
    inputRange: [0, imageScrollDistance],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const tintOpacity = scrollYPosition.interpolate({
    inputRange: [0, imageScrollDistance * 0.7, imageScrollDistance],
    outputRange: [0, 0.1, 0.4],
    extrapolate: 'clamp',
  });

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    onPageChange(pageNum);
  };

  return (
    <Animated.FlatList
      style={{
        ...styles.absoluteTop,
        height: height,
        transform: [{ translateY: imageViewTranslate }],
      }}
      data={data}
      horizontal={true}
      pagingEnabled={true}
      onMomentumScrollEnd={onScrollEnd}
      renderItem={({ item }) => (
        <View
          style={{
            width,
            height: height,
          }}
        >
          <Animated.Image
            source={item.image}
            style={{
              ...styles.absoluteTop,
              height: height,
              resizeMode: 'cover',
              transform: [{ translateY: imageTranslate }],
            }}
          />
          <Animated.View
            style={{
              ...styles.absoluteTop,
              opacity: tintOpacity,
              zIndex: 2,
              backgroundColor: '#000',
              height: height,
            }}
          />
        </View>
      )}
    />
  );
};

export default Carousel;
