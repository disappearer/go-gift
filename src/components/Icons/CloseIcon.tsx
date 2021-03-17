import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  style?: StyleProp<ViewStyle>;
};
const CloseIcon: React.FC<Props> = ({ style }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      style={[style]}
    >
      <Path
        d="M12.25 3.886c.174.173.206.43.089.607l-.051.063-3.58 3.58 3.443 3.443c.175.175.158.475-.037.67-.173.174-.43.206-.607.088l-.063-.05-3.443-3.445-3.309 3.31c-.174.174-.474.157-.67-.038-.173-.173-.206-.43-.088-.607l.051-.063 3.309-3.309-3.445-3.444c-.175-.175-.158-.475.037-.67.173-.174.43-.206.607-.088l.063.05L8 7.429l3.58-3.58c.174-.174.474-.157.67.038z"
        fill="#1A405D"
        fillRule="nonzero"
      />
    </Svg>
  );
};

export default CloseIcon;
