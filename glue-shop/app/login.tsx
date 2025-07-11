import { Text, View } from "react-native";

import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const { login } = useAuthStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          login();
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
