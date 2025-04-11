import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Event() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Event",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => <Button title="Update" />,
        }}
      />
      <Text>Event</Text>
    </View>
  );
}
