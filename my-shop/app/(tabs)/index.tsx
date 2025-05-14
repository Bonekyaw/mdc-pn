import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useQuery } from "@/hooks/useQuery";

type Response = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
};

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery<Response>("users/2");

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Hello Networking</Text>
      {isLoading && <ActivityIndicator />}
      {data ? <Text>{data.data.email}</Text> : <Text>No User Found</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: "#CA64E3",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
