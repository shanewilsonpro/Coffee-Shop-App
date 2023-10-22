import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { styles } from "./styles/home-screen.styles";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTSIZE } from "../theme/theme";
import CustomIcon from "../components/custom-icon";
import CoffeeData from "../data/CoffeeData";
import { useStore } from "../store/store";

const getCategoriesFromData = (data) => {
  let temp = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

const HomeScreen = () => {
  const coffeeList = useStore((state) => state.CoffeeList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeData)
  );

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* HEADER BAR */}
        <View style={styles.HeaderBar}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.LinearGradientBG}
          >
            <CustomIcon
              name={"menu"}
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </LinearGradient>

          <View style={styles.ImageContainer}>
            <Image
              source={require("../assets/app_images/avatar.png")}
              style={styles.Image}
            />
          </View>
        </View>

        {/* SCREEN TITLE */}
        <Text style={styles.ScreenTitle}>
          Find the best{"\n"}coffee for you
        </Text>

        {/* SEARCH INPUT */}
        <View style={styles.InputContainer}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={""}
            onChangeText={(text) => {}}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>

        {/* CATEGORY HORIZONTAL SCROLLER */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          {categories.map((category, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}
            >
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {}}
              >
                <Text style={[styles.CategoryText]}>{category}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
