import { Stack } from "expo-router";

export default function RootLayout() {
  const isLoggedIn = true;
  const isAdmin = false;

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Protected guard={isAdmin}>
          <Stack.Screen name="profile" options={{ title: "Profile" }} />
        </Stack.Protected>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ title: "Login" }} />
      </Stack.Protected>
    </Stack>
  );
}
