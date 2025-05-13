import { useEffect, useState } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users/2", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.log(response);
        return null;
      }

      const json = await response.json();
      setUser(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Hello Networking</Text>
      {isLoading && <ActivityIndicator />}
      {user ? <Text>{user?.email}</Text> : <Text>No User Found</Text>}
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
