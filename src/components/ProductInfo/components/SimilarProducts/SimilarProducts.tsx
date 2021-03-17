import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles } from './styles';
import Text from '../../../Text';
import CloudIcon from '../../../CloudIcon';

const PRODUCT_IMAGE = require('../../../../../assets/img.png');
const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 168;

const SimilarProducts: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.similarProductsRow, {}]}>
      <View style={{ paddingHorizontal: 16, paddingBottom: 10 }}>
        <Text fontSize={12}>Similar to your wishes</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ width }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <View
          style={{
            width: IMAGE_WIDTH,
            marginRight: 16,
            flexDirection: 'column',
          }}
        >
          <ImageBackground
            source={PRODUCT_IMAGE}
            style={[
              styles.advertisementImage,
              { height: IMAGE_HEIGHT, width: IMAGE_WIDTH },
            ]}
          >
            <TouchableOpacity style={styles.cloudButton}>
              <CloudIcon style={{ width: 16, height: 16 }} />
            </TouchableOpacity>
          </ImageBackground>
          <Text fontSize={12} bold={true} style={{ marginTop: 10 }}>
            Nike Air Max Light Gazelle
          </Text>
          <Text fontSize={10} style={{ marginTop: 6 }}>
            1020,- DKK
          </Text>
        </View>
        <View
          style={{
            width: IMAGE_WIDTH,
            marginRight: 16,
            flexDirection: 'column',
          }}
        >
          <ImageBackground
            source={PRODUCT_IMAGE}
            style={[
              styles.advertisementImage,
              { height: IMAGE_HEIGHT, width: IMAGE_WIDTH },
            ]}
          />
          <Text fontSize={12} bold={true} style={{ marginTop: 10 }}>
            2ND Day 2ND Miriam
          </Text>
          <Text fontSize={10} style={{ marginTop: 6 }}>
            1000,- DKK
          </Text>
        </View>
        <View
          style={{
            width: IMAGE_WIDTH,
            flexDirection: 'column',
          }}
        >
          <ImageBackground
            source={PRODUCT_IMAGE}
            style={[
              styles.advertisementImage,
              { height: IMAGE_HEIGHT, width: IMAGE_WIDTH },
            ]}
          />
          <Text fontSize={12} bold={true} style={{ marginTop: 10 }}>
            Billi Bi 3/4 støvle
          </Text>
          <Text fontSize={10} style={{ marginTop: 6 }}>
            1.599,- DKK
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SimilarProducts;
