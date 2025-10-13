import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import {
  deletePost,
  updatePost,
  // type Post,
  selectPostById,
} from "@/features/redux/postsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

interface PostDetailProps {
  // post: Post;
  postId: string;
}

const PostDetail = ({ postId }: PostDetailProps) => {
  // "p1"
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => selectPostById(state, postId));

  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");

  const handleEdit = async () => {
    try {
      await dispatch(updatePost({ id: postId, title })).unwrap();

      setTitle("");
      setIsEdit(false);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update post");
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deletePost(postId)).unwrap();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to delete post");
    }
  };

  return (
    <View style={{ padding: 12, borderBottomWidth: 1 }}>
      {!isEdit ? (
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{post.title}</Text>
      ) : (
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
        />
      )}
      <Text>{post.content}</Text>
      {!isEdit ? (
        <View style={{ flexDirection: "row", marginTop: 8, gap: 16 }}>
          <TouchableOpacity
            onPress={() => {
              setIsEdit(true);
              setTitle(post.title);
            }}
          >
            <Text style={{ color: "blue" }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={{ color: "red" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row", marginTop: 8, gap: 16 }}>
          <TouchableOpacity onPress={handleEdit}>
            <Text style={{ color: "blue" }}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEdit(false)}>
            <Text style={{ color: "red" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PostDetail;
