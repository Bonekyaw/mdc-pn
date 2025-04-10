import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";

export default function UserSetting() {
  const { username } = useLocalSearchParams();
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: username as string,
  //   });
  // }, [navigation]);

  const router = useRouter();

  return (
    <View>
      <Stack.Screen options={{ title: username as string }} />
      <Text>User Setting - {username}</Text>
      <Button
        title="Update title"
        onPress={() => router.setParams({ username: "Updated" })}
      />
    </View>
  );
}
