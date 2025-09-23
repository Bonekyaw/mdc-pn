import { Button, StyleSheet, Text, View } from "react-native";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  increment,
  decrement,
  incrementByAmount,
  countUsers,
} from "@/features/redux/counterSlice";

export default function CounterPage() {
  const count = useAppSelector((state) => state.counter.value);
  const adultUsersLength = useAppSelector(countUsers);
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button title="Increment +" onPress={() => dispatch(increment())} />
      <Text>Counter : {count}</Text>
      <Button title="Decrement -" onPress={() => dispatch(decrement())} />
      {/* <Button
        title="incrementByAmount 2"
        onPress={() => dispatch(incrementByAmount(2))}
      />
      <Text>Users : {adultUsersLength}</Text> */}
    </View>
  );
}
