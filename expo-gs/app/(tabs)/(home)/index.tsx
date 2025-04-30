import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, Button } from "react-native"; // Core components
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/settings/david" style={{ fontFamily: "SpaceMono" }}>
        Go to Settings
      </Link>
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

// 1. Local font
//      a. expo-font config ( Expo 50^, Dev Build )
//      b. useFonts
// 2. Google font
//      a. expo-font
//      b. useFonts
