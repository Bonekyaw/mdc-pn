import { useState } from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabTwoScreen() {
  const [value, setValue] = useState<{ name: string; age: number }>();

  const getData = async () => {
    try {
      const person = await AsyncStorage.getItem("person");
      if (person !== null) {
        setValue(JSON.parse(person));
      }
    } catch (error) {
      console.log("Error retrieving data", error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello Explore</Text>
      <Text>Name : {value?.name}</Text>
      <Text>Age : {value?.age}</Text>
      <Button title="Get from Async" onPress={getData} />
    </SafeAreaView>
  );
}
