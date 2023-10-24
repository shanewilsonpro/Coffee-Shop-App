import { StyleSheet } from "react-native";
import { FONTFAMILY, FONTSIZE, COLORS } from "../../theme/theme";

export const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  LottieStyle: {
    height: 300,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: "center",
  },
});
