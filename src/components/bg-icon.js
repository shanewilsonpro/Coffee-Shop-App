import { View } from "react-native";
import React from "react";
import CustomIcon from "./custom-icon";
import { styles } from "./styles/bg-icon.styles";

const BGIcon = ({ name, color, size, BGColor }) => {
  return (
    <View style={[styles.IconBG, { backgroundColor: BGColor }]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BGIcon;
