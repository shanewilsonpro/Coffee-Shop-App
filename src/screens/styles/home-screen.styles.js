import { StyleSheet, Dimensions } from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.space_24,
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
    paddingHorizontal: SPACING.space_24,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: SPACING.space_16,
    marginHorizontal: SPACING.space_24,
    marginVertical: 30,
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: 60,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: SPACING.space_20,
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
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  CoffeeBeansTitle: {
    fontSize: FONTSIZE.size_18,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  EmptyListContainer: {
    width: Dimensions.get("window").width - SPACING.space_30 * 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.space_36 * 3.2,
  },
});
