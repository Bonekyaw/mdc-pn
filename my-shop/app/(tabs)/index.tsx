import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#CA64E3",
        }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: "#CA00e3" }} />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#0A00e3",
          // alignSelf: "flex-end",
        }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "purple" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "indigo" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     marginTop: 50,
//     color: "#CA64E3",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
