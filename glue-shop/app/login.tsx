import { useState } from "react";
import { ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useForm, Controller } from "react-hook-form";

import { useAuthStore } from "@/store/authStore";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Login() {
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((showState) => !showState);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });
  const onSubmit = async (formState: any) => console.log(formState);

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
              Sign In {"\n"}to your Account
            </Heading>
            <Text size="lg" className="font-semibold text-gray-500">
              Enter your phone & password to sign in
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
            <VStack space="xs" className="mt-5">
              <FormControlLabel>
                <FormControlLabelText className="text-lg font-semibold text-gray-500">
                  Password
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 digits long.",
                  },
                  maxLength: {
                    value: 8,
                    message: "Password must be 8 digits long.",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter digits only.",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input className="h-16 rounded-lg border-gray-200" size="xl">
                    <InputField
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      inputMode="numeric"
                      maxLength={8}
                    />
                    <InputSlot className="pr-3" onPress={handleShowPassword}>
                      <InputIcon as={showPassword ? EyeOffIcon : EyeIcon} />
                    </InputSlot>
                  </Input>
                )}
                name="password"
              />
              {errors.password && (
                <Text size="md" className="text-red-400">
                  {errors.password.message}
                </Text>
              )}
            </VStack>
            <FormControlHelper>
              <FormControlHelperText>Must be 8 digits.</FormControlHelperText>
            </FormControlHelper>
            {/* <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError> */}
          </FormControl>
          <Text size="md" bold className="text-right text-blue-500">
            Forgot Password?
          </Text>
          <Button
            className="h-16 rounded-lg bg-blue-600"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText className="text-lg font-bold">Sign In</ButtonText>
          </Button>
        </VStack>
        <VStack space="lg" className="mt-6">
          <Divider className="bg-gray-300" />
          <Text className="text-center">Create an account ?</Text>
          <Button className="h-16 rounded-lg bg-sky-400">
            <ButtonText className="text-lg font-bold">Sign Up</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
