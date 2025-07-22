import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

import { useAuthStore } from "@/store/authStore";

const Register = () => {
  const { setOtpScreen } = useAuthStore();
  const router = useRouter();

  const handleOtpScreen = () => {
    setOtpScreen();
    router.navigate("/verify");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register Screen</Text>
      <Link href="/login" style={{ fontSize: 24 }}>
        Login
      </Link>
      <Button title="Go to OTP Screen" onPress={handleOtpScreen} />
    </View>
  );
};

export default Register;
