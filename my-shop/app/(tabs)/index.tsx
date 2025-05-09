import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: "static",
          top: 0,
          left: 20,
          width: 150,
          height: 150,
          backgroundColor: "#CA64E3",
        }}
      />
      <View
        style={{
          position: "static",
          top: 20,
          left: 40,
          width: 150,
          height: 150,
          backgroundColor: "#0A00e3",
        }}
      />
      <View
        style={{
          position: "static",
          top: 40,
          right: 0,
          width: 150,
          height: 150,
          backgroundColor: "#0Aeeff",
        }}
      />
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
