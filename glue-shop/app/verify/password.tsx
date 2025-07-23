import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthStore } from "@/store/authStore";
import { router } from "expo-router";

const Password = () => {
  const { login } = useAuthStore();

  const handleLogin = () => {
    login();
    router.navigate("/"); // Assuming you have a home route to navigate to after login
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Password Screen</Text>
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

export default Password;
