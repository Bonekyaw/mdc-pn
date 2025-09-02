import { useEffect } from "react";
import { ActivityIndicator, Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { fetchPosts } from "@/features/redux/postsSlice";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <Text>Loading Posts ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Redux Async Thunk</Text>
      {items.map((post) => (
        <Text>{post.title}</Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
