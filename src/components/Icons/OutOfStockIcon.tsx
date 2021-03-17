import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

type Props = {
  style: StyleProp<ViewStyle>;
};
const OutOfStockIcon: React.FC<Props> = ({ style }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      style={[style]}
    >
      <G fill="none" fillRule="evenodd">
        <Path
          fill="#1A405D"
          fillRule="nonzero"
          d="M7.842 1.526a.489.489 0 01.316 0l5.994 1.998a.484.484 0 01.321.309c0 .006.002.01.004.016A.471.471 0 0114.5 4l-.003-.059.002.035L14.5 4v7a.5.5 0 01-.342.474l-6 2a.489.489 0 01-.316 0l-6-2A.5.5 0 011.5 11V3.986c0-.016.002-.033.004-.049L1.51 3.9a.33.33 0 01.013-.052l.005-.014a.482.482 0 01.314-.308l-.075.032a.437.437 0 01.08-.034zM2.5 4.694v5.945l5 1.666V6.5a.49.49 0 01.018-.133L2.5 4.694zm11-.001L8.482 6.367l.01.043.008.09v5.805l5-1.666V4.693zM8 2.527L3.582 4 8 5.472 12.418 4 8 2.527z"
        />
        <Circle cx={13} cy={12} r={3} fill="#CC3E3E" />
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M14.5 11.5a.5.5 0 01.09.992l-.09.008h-3a.5.5 0 01-.09-.992l.09-.008h3z"
        />
      </G>
    </Svg>
  );
};

export default OutOfStockIcon;
