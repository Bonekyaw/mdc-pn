import { View, Text, Button, BackHandler, Alert } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import { useRouter } from "expo-router";

import { useAuthStore } from "@/store/authStore";
import { formatTime } from "@/utils";

const OTP_TIMEOUT_MS = 90 * 1000; // 90 seconds

const OtpScreen = () => {
  const { setPasswordScreen } = useAuthStore();
  const router = useRouter();

  const endTimeRef = useRef(Date.now() + OTP_TIMEOUT_MS); // 100,000 + 90,000
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.ceil((endTimeRef.current - Date.now()) / 1000),
  ); // 2.1 -> 3, 2.7 -> 3

  useEffect(() => {
    const id = setInterval(() => {
      const diff = endTimeRef.current - Date.now(); // Calculate the difference in milliseconds
      setTimeLeft(Math.max(0, Math.ceil(diff / 1000))); // Convert milliseconds to seconds
    }, 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const backAction = () => {
      if (timeLeft > 0) {
        return true; // Prevent back navigation if time is left
      }
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => router.back() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [router, timeLeft]);

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
      {timeLeft > 0 ? (
        <Text>Time remaining - {formatTime(timeLeft)}</Text>
      ) : (
        <Button
          title="Resend OTP"
          onPress={() => {
            endTimeRef.current = Date.now() + OTP_TIMEOUT_MS; // Reset the timer
            setTimeLeft(Math.ceil(OTP_TIMEOUT_MS / 1000)); // Reset the time left
          }}
        />
      )}
    </View>
  );
};

export default OtpScreen;
