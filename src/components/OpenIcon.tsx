import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

type Props = {
  style?: StyleProp<ViewStyle>;
};
const OpenIcon: React.FC<Props> = ({ style }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      style={[style]}
    >
      <G fill="#1A405D" fillRule="nonzero">
        <Path d="M4 3.5a2.501 2.501 0 00-2.495 2.336L1.5 6v6a2.501 2.501 0 002.336 2.495L4 14.5h6a2.501 2.501 0 002.495-2.336L12.5 12V8a.5.5 0 00-.992-.09L11.5 8v4a1.5 1.5 0 01-1.356 1.493L10 13.5H4a1.5 1.5 0 01-1.493-1.356L2.5 12V6a1.5 1.5 0 011.356-1.493L4 4.5h4a.5.5 0 00.09-.992L8 3.5H4z" />
        <Path d="M14 1.5a.5.5 0 01.5.5v4l-.008.09A.5.5 0 0113.5 6V3.206L8.854 7.854a.501.501 0 01-.765-.638l.057-.07L12.792 2.5H10a.5.5 0 01-.09-.992L10 1.5z" />
      </G>
    </Svg>
  );
};

export default OpenIcon;
