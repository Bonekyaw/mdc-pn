import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View>
      <Link href="/detail">Go to Home Detail</Link>
      <Text>profile screen </Text>
    </View>
  );
}
