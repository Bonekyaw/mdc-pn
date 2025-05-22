import { useState, useCallback } from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";

import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Category from "@/components/shop/Category";
import { categories, products } from "@/data/index";
import Product from "@/components/shop/Product";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const [select, setSelect] = useState(1);
  const width = Dimensions.get("screen").width;
  const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

  const handleSelect = useCallback((id: number) => {
    setSelect(id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/n.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Cart />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <Image
              style={styles.banner}
              source={require("@/data/shop/banner6.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <View style={{ paddingHorizontal: 15 }}>
              <Title title="Shop By Category" btnText="See All" />
              <FlashList
                data={categories}
                extraData={select}
                renderItem={({ item }) => (
                  <Category {...item} select={select} onSelect={handleSelect} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                estimatedItemSize={90}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 10 }}
              />

              <Title title="Recommended for You" btnText="See All" />
            </View>
          </>
        )}
        data={products}
        numColumns={numColumns}
        renderItem={({ item }) => <Product {...item} />}
        keyExtractor={(item) => item.id.toString()}
        // estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ paddingHorizontal: 15 }}
        // contentContainerStyle={{ paddingVertical: 15 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  logo: {
    width: 50,
    height: 25,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
