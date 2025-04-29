import { View, Text, Platform, ScrollView } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Image } from "expo-image";
import CustomText from "@/components/shop/CustomText";

export default function CartScreen() {
  //   const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomText style={{ fontSize: 30 }}>Welcome to Shop</CustomText>
        <CustomText>cart Screen</CustomText>
        <CustomText style={{ fontFamily: "Oswald-Bold" }}>
          Hello World
        </CustomText>
        <Text style={{ fontFamily: "Oswald-Bold", fontSize: 30 }}>
          Oswald-Bold
        </Text>
        <Text style={{ fontFamily: "SpaceMono", fontSize: 30 }}>
          Space Mono
        </Text>
        {/* <Text style={{ fontSize: 30, fontFamily: Platform.select({android: "Normal-Bold", ios: "Normal"}) }}>System Font</Text> */}
        <CustomText style={{ fontFamily: "Inter_900Black" }}>
          Inter_900Black
        </CustomText>
        <CustomText style={{ fontFamily: "Inter_500Medium_Italic" }}>
          Inter_500Medium_Italic
        </CustomText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={{ uri: "https://reqres.in/img/faces/7-image.jpg" }}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: "data:image/png;base64,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",
          }}
        />
        <Image source={{ uri: "gitme" }} style={{ width: 200, height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Image
// - Local asset
// - Remote asset
// - URI data image

// https://reqres.in/img/faces/7-image.jpg
// data:image/png;base64,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
