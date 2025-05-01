import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useCounter } from "@/providers/countContext";

export default function Profile() {
  const { count, increase, decrease } = useCounter();
  return (
    <View>
      <Link href="/settings/backem">Go to Setting</Link>
      <Text>profile screen </Text>
      <Text style={{ fontSize: 32, marginTop: 10 }}>Count : {count}</Text>
      <Button title="Increase +" onPress={increase} />
      <Button title="Decrease -" onPress={decrease} />
    </View>
  );
}
