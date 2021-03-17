import React from 'react';
import { Image, ScrollView, useWindowDimensions, View } from 'react-native';
import { styles } from './styles';

const ADVERTISEMENT_IMAGE = require('../../../../../assets/advertisement.png');

const Advertisements: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.advertisementRow}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height: 140, width }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <View
          style={{
            backgroundColor: 'yellow',
            width: width - 32,
            marginRight: 10,
          }}
        >
          <Image
            source={ADVERTISEMENT_IMAGE}
            style={[styles.advertisementImage, { width: width - 32 }]}
          />
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: width - 32,
            marginRight: 10,
          }}
        >
          <Image
            source={ADVERTISEMENT_IMAGE}
            style={[styles.advertisementImage, { width: width - 32 }]}
          />
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: width - 32,
          }}
        >
          <Image
            source={ADVERTISEMENT_IMAGE}
            style={[styles.advertisementImage, { width: width - 32 }]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Advertisements;
