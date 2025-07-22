import { Stack } from "expo-router";

import { useAuthStore } from "@/store/authStore";

export default function VerifyLayout() {
  const { isPasswordScreen } = useAuthStore();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Protected guard={isPasswordScreen}>
        <Stack.Screen name="password" />
      </Stack.Protected>
    </Stack>
  );
}
