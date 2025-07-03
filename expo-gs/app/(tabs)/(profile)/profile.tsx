import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import * as SecureStore from "expo-secure-store";

import { useCounter } from "@/providers/countContext";

export default function Profile() {
  const { count, increase, decrease } = useCounter();
  const [show, setShow] = useState("");

  const getFromSecureStore = async () => {
    const name = await SecureStore.getItemAsync("name");
    setShow(name || "No name found");
  };

  return (
    <View>
      <Link href="/settings/backem">Go to Setting</Link>
      <Text>profile screen </Text>
      <Text style={{ fontSize: 27, marginTop: 10 }}> Name : {show}</Text>
      <Button title="Get data from secure store" onPress={getFromSecureStore} />
      <Text style={{ fontSize: 32, marginTop: 10 }}>Count : {count}</Text>
      <Button title="Increase +" onPress={increase} />
      <Button title="Decrease -" onPress={decrease} />
    </View>
  );
}
