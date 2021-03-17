import React from 'react';
import { View } from 'react-native';

const Separator: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          backgroundColor: '#dddddd',
          height: 1,
          width: '100%',
        }}
      />
    </View>
  );
};

export default Separator;
