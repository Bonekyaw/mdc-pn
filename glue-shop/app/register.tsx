import { useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { isAxiosError } from "axios";
import { useForm, Controller } from "react-hook-form";
import { Link, useRouter } from "expo-router";

import { useAuthStore } from "@/store/authStore";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { authApi } from "@/api";
import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@/components/ui/toast";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Register() {
  const router = useRouter();
  const { setOtpScreen } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
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

  const onSubmit = async (formState: any) => {
    //console.log(formState);
    setIsSubmitting(true);
    try {
      const response = await authApi.post("register", {
        phone: formState.phone,
      });

      console.log("Sing Up successful:", response.data);
      const { phone, token } = response.data;
      setOtpScreen(phone, token);
      router.navigate("/verify");
    } catch (error) {
      // console.error("Login failed:", error);
      if (isAxiosError(error)) {
        // Handle Axios error
        // console.error("Axios error:", error.response?.data);
        handleToast(
          "Registeration failed!",
          error.response?.data.message ||
            "An error occurred during Registeration.",
        );
      } else {
        // Handle other errors
        handleToast(
          "Registeration failed!",
          "An error occurred during Registeration.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <VStack space="4xl">
          <VStack space="lg">
            <Heading size="3xl" className="leading-snug">
              Sign Up {"\n"}to create an Account
            </Heading>
            <Text size="lg" className="font-semibold text-gray-500">
              Already have an account?{"  "}
              <Link href="/login" className="text-sky-600 underline">
                Sign In
              </Link>
            </Text>
          </VStack>
          <FormControl
            //isInvalid={false}
            size="lg"
            // isDisabled={false}
            // isReadOnly={false}
            // isRequired={false}
          >
            <VStack space="xs">
              <FormControlLabel>
                <FormControlLabelText className="text-lg font-semibold text-gray-500">
                  Phone Number
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Phone number is required.",
                  },
                  minLength: {
                    value: 7,
                    message: "This is not a valid phone number.",
                  },
                  maxLength: {
                    value: 12,
                    message: "This is not a valid phone number.",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter digits only.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input className="h-16 rounded-lg border-gray-200" size="xl">
                    <InputField
                      placeholder="0977******7"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      inputMode="numeric"
                      maxLength={12}
                    />
                  </Input>
                )}
                name="phone"
              />
              {errors.phone && (
                <Text size="md" className="text-red-400">
                  {errors.phone.message}
                </Text>
              )}
            </VStack>
          </FormControl>
          <Button
            className="h-16 rounded-lg bg-sky-600"
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <ButtonText className="text-lg font-bold">Sign Up</ButtonText>
            )}
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
