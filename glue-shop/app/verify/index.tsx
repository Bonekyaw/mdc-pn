import { View, Text } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from "expo-router";

import { useAuthStore } from "@/store/authStore";

const OtpScreen = () => {
  const { setPasswordScreen } = useAuthStore();
  const router = useRouter();

  const handleOtpFilled = (otp: string) => {
    //console.log(`OTP is ${otp}`);
    setPasswordScreen();
    router.navigate("/verify/password");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Verify OTP Screen</Text>
      <View style={{ width: "80%", marginTop: 20 }}>
        <OtpInput
          // numberOfDigits={6}
          // onTextChange={(text) => console.log(text)}
          focusColor="green"
          type="numeric"
          // secureTextEntry={false}
          onFilled={handleOtpFilled}
        />
      </View>
    </View>
  );
};

export default OtpScreen;
