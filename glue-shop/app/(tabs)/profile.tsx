import React, { useState } from "react";
import { TextInput, Text, Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/authStore";

const ExpensiveChartOptimized = ({
  onChartPress,
}: {
  onChartPress: () => void;
}) => {
  console.log("ExpensiveChartOptimized is re-rendering!");
  return (
    <View style={styles.chart}>
      <Text style={styles.chartText}>I am a very slow chart...</Text>
      <Button title="Press Me" onPress={onChartPress} />
    </View>
  );
};

const Profile = () => {
  const { logout } = useAuthStore();
  const [text, setText] = useState("");

  // No useCallback needed here. The compiler will memoize this function automatically.
  const handleChartPress = () => {
    console.log("Chart was pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.infoText}
        onPress={() => {
          logout();
        }}
      >
        Sign Out
      </Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type here..."
        placeholderTextColor="#999"
      />
      <Text style={styles.infoText}>
        Typing in the input should NOT re-render the chart.
      </Text>
      <View style={styles.separator} />
      <ExpensiveChartOptimized onChartPress={handleChartPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "white",
    marginBottom: 20,
  },
  infoText: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#444",
    marginBottom: 20,
  },
  chart: {
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 8,
    alignItems: "center",
  },
  chartText: {
    color: "white",
    marginBottom: 10,
  },
});

export default Profile;
