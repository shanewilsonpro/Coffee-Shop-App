import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { COLORS } from "../theme/theme";
import HeaderBar from "../components/header-bar";
import EmptyListAnimation from "../components/empty-list-animation";
import PopUpAnimation from "../components/pop-up-animation";
import OrderHistoryCard from "../components/order-history-card";

import { styles } from "./styles/order-history-screen.styles";

const OrderHistoryScreen = ({ navigation }) => {
  const OrderHistoryList = useStore((state) => state.OrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({ index, id, type }) => {
    navigation.push("Details", {
      index,
      id,
      type,
    });
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require("../lottie/download.json")}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />

            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={"No Order History"} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data, index) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}
            >
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;
