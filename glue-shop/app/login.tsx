import { Text, View } from "react-native";
import { Link } from "expo-router";

import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const { login } = useAuthStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Text
        style={{ fontSize: 24, marginBottom: 20 }}
        onPress={() => {
          login();
        }}
      >
        Sign In
      </Text>
      <Link href="/register" style={{ fontSize: 24 }}>
        Register
      </Link>
    </View>
  );
}
