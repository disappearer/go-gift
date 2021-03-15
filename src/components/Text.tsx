import React from "react";
import { Text as ReactNativeText } from "react-native";

type Props = {
  fontSize: number,
  bold?: boolean;
};
const Text: React.FC<Props> = ({ fontSize, bold, children }) => (
  <ReactNativeText style={{
    fontSize,
    fontFamily: bold ? 'OpenSans_600SemiBold' : 'OpenSans_400Regular',
    color: '#1a405d'
  }}>
    {children}
  </ReactNativeText>
);

export default Text;
