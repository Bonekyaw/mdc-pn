import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import POSTS from "@/data/posts.json";

export default function HomeScreen() {
  const [press, setPress] = useState(false);

  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World </Text>
      {POSTS.posts.map((post) => (
        <Text
          key={post.id}
          style={[styles.text, styles.postText, { color: "red" }]}
        >
          {post.title} - {post.content} By {post.author} at {post.date}
        </Text>
      ))}
      <Text style={{ fontWeight: "bold", marginBottom: 20 }}>
        This is Parent Text.
        {"\n"}
        {"\n"}
        <Text style={{ color: "blue" }} onPress={() => setPress((p) => !p)}>
          {"\t"}This is Nested Text. {press && "Pressed"}
        </Text>
      </Text>
      <Text
        style={{
          paddingTop: 10,
          textAlign: "justify",
          paddingHorizontal: 10,
          fontSize: 16,
          lineHeight: 26,
          // fontWeight: "400",
          color: "purple",
          //fontStyle: "italic",
          // fontVariant: ["small-caps"],
          // letterSpacing: 1,
          textDecorationLine: "underline",
          textDecorationStyle: "dotted",
          textDecorationColor: "red",
        }}
        // numberOfLines={4}
        // ellipsizeMode="middle"
        selectable={true}
        allowFontScaling={false}
      >
        {POSTS.content}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 30,
    color: "orange",
  },
  postText: {
    marginBottom: 10,
    fontSize: 16,
  },
});
