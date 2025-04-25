import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomText from "@/components/shop/CustomText";

export default function CartScreen() {
  //   const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <CustomText style={{ fontSize: 30 }}>Welcome to Shop</CustomText>
      <CustomText>cart Screen</CustomText>
      <Text style={{ fontFamily: "Oswald-Bold" }}>Hello World</Text>
    </SafeAreaView>
  );
}
