import { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [formState, setFormState] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });

  const storeData = async () => {
    try {
      const formStateString = JSON.stringify(formState);
      await AsyncStorage.setItem("person", formStateString);
    } catch (error) {
      console.log("Error saving data", error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello Home</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={(val) => setFormState({ ...formState, name: val })}
        defaultValue={formState?.name}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <Text>Your age</Text>
      <TextInput
        placeholder="Enter your age"
        onChangeText={(val) => setFormState({ ...formState, age: Number(val) })} // 12 - "12"
        defaultValue={formState.age.toString()} // 12 - "12"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />

      <Button title="Save to AsyncStorage" onPress={storeData} />
    </SafeAreaView>
  );
}
