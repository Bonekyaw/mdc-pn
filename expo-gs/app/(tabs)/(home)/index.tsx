import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native"; // Core components
import * as SecureStore from "expo-secure-store";

// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
import { useCounter } from "@/providers/countContext";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const { count, increase, decrease } = useCounter();

  const saveToSecureStore = async () => {
    await SecureStore.setItemAsync("name", text);
  };

  const deleteFromSecureStore = async () => {
    await SecureStore.deleteItemAsync("name");
  };

  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>Hello {text}</Text>
      <TextInput
        style={{ fontSize: 32, height: 40 }}
        placeholder="Type Here ..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="Save to secure store" onPress={saveToSecureStore} />
      <Button
        title="Delete name from secure store"
        onPress={deleteFromSecureStore}
      />
      <Text style={{ fontSize: 32, marginTop: 10 }}>Count : {count}</Text>
      <Button title="Increase +" onPress={increase} />
      <Button title="Decrease -" onPress={decrease} />
    </View>
  );
}

// 1. Local font
//      a. expo-font config ( Expo 50^, Dev Build )
//      b. useFonts
// 2. Google font
//      a. expo-font
//      b. useFonts

// Store Data
// 1. Temporary store data for one component ( useState )
// 2. Temporary store data for multiple components ( react context, redux, zustand)
// 3. Persistent store small data without encryption ( AsyncStorage, mmkv )
// 4. Persistent store small data with encryption ( SecureStore, mmkv )
// 5. Persistent store large data in database ( SQLite, Realm )

// key-value pairs
// "name": "John Doe" - 2KB
