import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../theme/theme";
import CustomIcon from "./custom-icon";
import { styles } from "./styles/gradient-bg-icon.styles";

const GradientBGIcon = ({ name, color, size }) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBG}
      >
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;
