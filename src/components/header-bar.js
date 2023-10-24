import React from "react";
import { Text, View, Image } from "react-native";

import { COLORS, FONTSIZE } from "../theme/theme";
import GradientBGIcon from "./gradient-bg-icon";

import { styles } from "./styles/header-bar.styles";

const HeaderBar = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      {/* MENU BUTTON */}
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />

      {/* HEADER TITLE */}
      <Text style={styles.HeaderText}>{title}</Text>

      {/* PROFILE PICTURE */}
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/app_images/avatar.png")}
          style={styles.Image}
        />
      </View>
    </View>
  );
};

export default HeaderBar;
