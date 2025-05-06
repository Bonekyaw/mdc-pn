import { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMMKVStorage } from "react-native-mmkv-storage";

import { MMKV, MMKVENC } from "@/mmkv/store";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [user, setUser] = useMMKVStorage("user", MMKV, "unknown");
  // const [policy, setPolicy] = useMMKVStorage("policy", SETTING, "");
  const [token, setToken] = useMMKVStorage("token", MMKVENC, "");

  const setString = async () => {
    await MMKV.setStringAsync("user", name);
  };

  // const getUser = () => {
  //   const value = MMKV.getString("user");
  //   console.log(value);
  // }

  return (
    <SafeAreaView>
      <Text>Hello {name} </Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={(val) => setName(val)}
        defaultValue={name}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <Button title="Save to MMKV" onPress={() => setUser(name)} />
      <Text>{user}</Text>
      <Button title="Save to MMKV" onPress={setString} />
      <Text>Token : {token}</Text>
      <Button title="Save to MMKVENC" onPress={() => setToken("asdf1234")} />
    </SafeAreaView>
  );
}
