import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  increment,
  decrement,
  incrementByAmount,
  countUsers,
} from "@/features/redux/counterSlice";

export default function HomeScreen() {
  const count = useAppSelector((state) => state.counter.value);
  const adultUsersLength = useAppSelector(countUsers);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <Text>Counter : {count}</Text>
      <Button title="Increment +" onPress={() => dispatch(increment())} />
      <Button title="Decrement -" onPress={() => dispatch(decrement())} />
      <Button
        title="incrementByAmount 2"
        onPress={() => dispatch(incrementByAmount(2))}
      />
      <Text>Users : {adultUsersLength}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
