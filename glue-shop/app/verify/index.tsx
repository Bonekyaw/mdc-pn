import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { isAxiosError } from "axios";
import { useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { usePreventRemove } from "@react-navigation/native";

import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { useAuthStore } from "@/store/authStore";
import { formatTime } from "@/utils";
import { authApi } from "@/api";
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const OTP_TIMEOUT_MS = 90 * 1000; // 90 seconds

const OtpScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setPasswordScreen, phone, token } = useAuthStore();
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

  usePreventRemove(timeLeft > 0, () => {
    Alert.alert(
      "Hold on!",
      `Please wait ${formatTime(timeLeft)} before leaving`,
      [
        {
          text: "OK",
          // onPress: () => null,
          style: "default",
        },
      ],
    );
  });

  const toast = useToast();
  const [toastId, setToastId] = useState(0);
  const handleToast = (title: string, description: string) => {
    if (!toast.isActive(toastId.toString())) {
      showNewToast(title, description);
    }
  };
  const showNewToast = (title: string, description: string) => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId.toString(),
      placement: "bottom",
      duration: 2000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="error" variant="solid">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
          </Toast>
        );
      },
    });
  };

  // useEffect(() => {
  //   const backAction = () => {
  //     if (timeLeft > 0) {
  //       return true; // Prevent back navigation if time is left
  //     }
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => router.back() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, [router, timeLeft]);

  const handleOtpFilled = async (otp: string) => {
    //console.log(`OTP is ${otp}`);
    setIsSubmitting(true);

    try {
      const response = await authApi.post("verify-otp", {
        phone,
        token,
        otp,
      });

      console.log("Verify OTP successful:", response.data);
      setPasswordScreen(response.data.token);
      router.navigate("/verify/password");
    } catch (error) {
      // console.error("Login failed:", error);
      if (isAxiosError(error)) {
        // Handle Axios error
        // console.error("Axios error:", error.response?.data);
        handleToast(
          "OTP verification failed!",
          error.response?.data.message ||
            "An error occurred during OTP verification.",
        );
      } else {
        // Handle other errors
        handleToast(
          "OTP verification failed!",
          "An error occurred during OTP verification.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <HStack space="xs" className="mt-3 items-center justify-end">
        <Image
          style={{ width: 40, height: 40 }}
          source={require("@/assets/images/react-logo.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text size="xl" bold>
          Fashion
        </Text>
      </HStack>
      <VStack space="lg">
        <Heading size="3xl" className="leading-snug">
          Verify OTP {"\n"}to Continue Registration
        </Heading>
        <Text size="lg" className="font-semibold text-gray-500">
          we sent a SMS OTP to your phone number.
        </Text>
      </VStack>
      <VStack space="lg" className="mt-8">
        <OtpInput
          // numberOfDigits={6}
          // onTextChange={(text) => console.log(text)}
          focusColor="skyblue"
          type="numeric"
          // secureTextEntry={false}
          onFilled={handleOtpFilled}
          disabled={isSubmitting}
        />
        {isSubmitting ? (
          <ActivityIndicator />
        ) : timeLeft > 0 ? (
          <Text className="mt-2 text-lg">
            Time remaining - {formatTime(timeLeft)}
          </Text>
        ) : (
          <Text
            className="mt-2 text-lg text-sky-600"
            onPress={() => {
              endTimeRef.current = Date.now() + OTP_TIMEOUT_MS; // Reset the timer
              setTimeLeft(Math.ceil(OTP_TIMEOUT_MS / 1000)); // Reset the time left
            }}
          >
            Resend ?
          </Text>
        )}
      </VStack>
    </SafeAreaView>
  );
};

export default OtpScreen;
