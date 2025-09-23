import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Text,
  TextInput,
} from "react-native";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  fetchPosts,
  addPost,
  updatePost,
  type Post,
  deletePost,
  selectAllPosts,
  selectPostsByUser,
} from "@/features/redux/postsSlice";
import PostDetail from "./PostDetail";

export default function PostsList() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.posts);
  const userPosts = useAppSelector((state) => selectPostsByUser(state, "2"));
  //   const posts = useAppSelector(selectAllPosts);
  //   const userPosts = posts.filter((post) => post.userId === "2");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      await dispatch(addPost({ title, content, userId: "2" })).unwrap();
      setTitle("");
      setContent("");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to add post");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
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
      <Button title="Add Post" onPress={handleSubmit} disabled={pending} />

      {status === "pending" ? (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text>Loading posts ...</Text>
        </>
      ) : (
        <FlatList
          data={userPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostDetail post={item} />}
        />
      )}
    </>
  );
}
