import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import POSTS from "@/data/posts.json";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Hello World </Text>
      {POSTS.posts.map((post) => (
        <Text key={post.id} style={{ marginBottom: 10, fontSize: 16 }}>
          {post.title} - {post.content} By {post.author} at {post.date}
        </Text>
      ))}
    </SafeAreaView>
  );
}
