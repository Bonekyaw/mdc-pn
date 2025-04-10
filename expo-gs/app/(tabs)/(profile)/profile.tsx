import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View>
      <Link href="/settings/backem">Go to Setting</Link>
      <Text>profile screen </Text>
    </View>
  );
}
