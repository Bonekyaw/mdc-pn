import { StyleSheet, Text, View } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";

const Cart = () => {
  return (
    <View style={styles.container}>
      <IconSymbol size={24} name="cart" color="black" />
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>2</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  badgeContainer: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    marginTop: -5,
  },
  badge: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },
});
