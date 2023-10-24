import React from 'react';
import { View} from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './styles/pop-up-animation.styles';

const PopUpAnimation = ({style, source}) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

export default PopUpAnimation;