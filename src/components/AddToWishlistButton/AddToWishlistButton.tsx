import React, { useEffect, useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import CloudIcon from '../Icons/CloudIcon';
import Text from '../Text';
import { styles } from './styles';

type Props = {
  scrollYPosition: Animated.Value;
};
const AddToWishlistButton: React.FC<Props> = ({ scrollYPosition }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const id = scrollYPosition.addListener(({ value }) => {
      setIsButtonVisible(value === 0);
    });
    return () => {
      scrollYPosition.removeListener(id);
    };
  }, []);

  if (!isButtonVisible) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.wishlistButton}>
      <Text fontSize={12}>Add to wishlist</Text>
      <CloudIcon style={{ marginLeft: 6 }} />
    </TouchableOpacity>
  );
};

export default AddToWishlistButton;
