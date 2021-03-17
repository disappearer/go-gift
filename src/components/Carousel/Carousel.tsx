import React, { useEffect, useState } from 'react';
import {
  Animated,
  ImageURISource,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles } from './styles';

const IMAGE_MIN_HEIGHT_TO_WINDOW_HEIGHT_RATIO = 0.2;

type Props = {
  scrollYPosition: Animated.Value;
  height: number;
  onPageChange: (pageNumber: number) => void;
  data: { key: string; image: ImageURISource }[];
};
const Carousel: React.FC<Props> = ({
  scrollYPosition,
  height,
  onPageChange,
  data,
}) => {
  const { width, height: windowHeight } = useWindowDimensions();
  const imageMinHeight = windowHeight * IMAGE_MIN_HEIGHT_TO_WINDOW_HEIGHT_RATIO;
  const imageScrollDistance = height - imageMinHeight;

  const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    const id = scrollYPosition.addListener(({ value }) => {
      setScrollEnabled(value === 0);
    });

    return () => {
      scrollYPosition.removeListener(id);
    };
  }, []);

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
      scrollEnabled={scrollEnabled}
      showsHorizontalScrollIndicator={false}
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
