import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import { ProductType } from "@/types";
import { IconSymbol } from "@/components/ui/IconSymbol";

// interface ProductProps extends ProductType {
// }

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Product = ({
  id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,
  users,
}: ProductType) => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Pressable style={styles.heartContainer}>
        <IconSymbol
          name={users.length > 0 ? "heart.fill" : "heart"}
          size={18}
          color="#E66F2D"
        />
      </Pressable>
      <View style={styles.rowContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <IconSymbol name="star" size={12} color="orange" />
        <Text style={styles.star}>{star}</Text>
        <Text style={styles.quantity}>({quantity})</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={[styles.rowContainer]}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        {discount > 0 && (
          <Text style={styles.discount}>${discount.toFixed(2)}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: { marginHorizontal: 7 },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 5,
  },
  heartContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#00000010",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  brand: {
    color: "#00000090",
    fontWeight: "600",
    marginRight: 7,
  },
  star: {
    fontSize: 12,
    fontWeight: "300",
    marginHorizontal: 6,
  },
  quantity: {
    fontSize: 12,
    color: "gray",
  },
  title: {
    marginTop: 5,
    fontWeight: "400",
  },
  price: {
    color: "#007618",
    fontSize: 15,
    fontWeight: "500",
    marginRight: 7,
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
  },
});
