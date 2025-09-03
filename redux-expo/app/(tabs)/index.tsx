import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { fetchPosts, addPost, type Post } from "@/features/redux/postsSlice";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editing, setEditing] = useState<Post | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  // if (status === "pending") {
  //   return (
  //     <SafeAreaView
  //       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  //     >
  //       <ActivityIndicator size="large" />
  //       <Text>Loading Posts ...</Text>
  //     </SafeAreaView>
  //   );
  // }

  const handleSubmit = async () => {
    setPending(true);
    try {
      await dispatch(addPost({ title, content })).unwrap();
      setTitle("");
      setContent("");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to add post");
    } finally {
      setPending(false);
    }
  };

  const handleEdit = (post: Post) => {};
  const handleDelete = (id: string) => {};

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
        Redux Async Thunk
      </Text>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />
      <TextInput
        placeholder="Enter Content"
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button
        title={editing ? "Update Post" : "Add Post"}
        onPress={handleSubmit}
        disabled={pending}
      />

      {status === "pending" ? (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text>Loading posts ...</Text>
        </>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 12, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.title}
              </Text>
              <Text>{item.content}</Text>
              <View style={{ flexDirection: "row", marginTop: 8, gap: 16 }}>
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <Text style={{ color: "blue" }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text style={{ color: "red" }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
