import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>detail screen : {id}</Text>
    </View>
  );
}
