import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector } from "@/hooks/useRedux";

export default function HomeScreen() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <SafeAreaView>
      <Text>Counter : {count}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
