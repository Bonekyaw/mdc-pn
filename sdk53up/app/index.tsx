import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 33 }}>Home screen.</Text>
      <Link href="/login">Go To Login</Link>
      <Link href="/profile">Go To Profile</Link>
      <Link href="/(tabs)">Go To Tabs</Link>
    </View>
  );
}
