import React from "react";
import { StyleProp, Text as ReactNativeText, TextStyle } from "react-native";

type Props = {
  fontSize?: number,
  bold?: boolean;
  style?: StyleProp<TextStyle>;
};
const Text: React.FC<Props> = ({ fontSize, bold, children, style }) => (
  <ReactNativeText style={[{
    fontSize,
    // height: fontSize,
    // lineHeight: fontSize,
    fontFamily: bold ? 'OpenSans_600SemiBold' : 'OpenSans_400Regular',
    color: '#1a405d',
  }, style]}>
    {children}
  </ReactNativeText>
);

export default Text;
