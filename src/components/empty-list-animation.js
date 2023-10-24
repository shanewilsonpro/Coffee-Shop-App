import React from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

import { styles } from "./styles/empty-list-animation.styles";

const EmptyListAnimation = ({ title }) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require("../lottie/coffeecup.json")}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

export default EmptyListAnimation;
