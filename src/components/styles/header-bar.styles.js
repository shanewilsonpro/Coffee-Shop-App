import { StyleSheet } from "react-native";
import { SPACING, FONTFAMILY, FONTSIZE, COLORS } from "../../theme/theme";

export const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  ImageContainer: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: COLORS.primaryGreyHex,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
