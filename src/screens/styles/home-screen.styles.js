import { StyleSheet } from "react-native";
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: SPACING.space_24,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SPACING.space_24,
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
  LinearGradientBG: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: COLORS.primaryGreyHex,
    alignItems: "center",
    justifyContent: "center",
  },
  ScreenTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_16,
    marginVertical: 30,
  },
  InputIcon: {
    marginHorizontal: 20,
  },
  TextInputContainer: {
    flex: 1,
    height: 60,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
  },
  CategoryScrollViewStyle: {
    marginBottom: 20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: 15,
  },
  CategoryScrollViewItem: {
    alignItems: "center",
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
});
