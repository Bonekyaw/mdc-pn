import { Pressable, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

type CategoryProps = {
  id: number;
  name: string;
  image: any;
  select: number;
  onSelect: (id: number) => void;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Category = ({ id, name, image, select, onSelect }: CategoryProps) => {
  return (
    <Pressable style={styles.container} onPress={() => onSelect(id)}>
      <Image
        style={[styles.image, select === id && styles.select]}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.caption}>{name}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 7,
    marginRight: 30,
  },
  image: {
    width: 56,
    height: 56,
  },
  caption: {
    fontSize: 12,
    fontWeight: "600",
  },
  select: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 28,
  },
});
