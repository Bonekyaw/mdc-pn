import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, Button } from "react-native"; // Core components

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/detail?id=7">Go to Home Detail</Link>
      <Link href={{ pathname: "/detail", params: { id: 9 } }}>
        Go to Detail
      </Link>
      <Button
        title="Goto Detail"
        onPress={() =>
          router.navigate({ pathname: "/detail", params: { id: 5 } })
        }
      />
    </View>
  );
}
