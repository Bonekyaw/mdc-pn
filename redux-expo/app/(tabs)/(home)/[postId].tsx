import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import {
  deletePost,
  updatePost,
  // type Post,
  // selectPostById,
} from "@/features/redux/postsSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { useLocalSearchParams } from "expo-router";
import { useGetPostQuery } from "@/features/redux/rtk/postsSlice";

// interface PostDetailProps {
//   // post: Post;
//   postId: string;
// }

const PostDetail = () => {
  const { postId } = useLocalSearchParams();

  const dispatch = useAppDispatch();
  // const post = useAppSelector((state) =>
  //   selectPostById(state, postId.toString())
  // );

  const {
    data: post,
    isLoading,
    isSuccess,
  } = useGetPostQuery(postId.toString());

  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");

  const handleEdit = async () => {
    try {
      await dispatch(updatePost({ id: post?.id, title })).unwrap();

      setTitle("");
      setIsEdit(false);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to update post");
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deletePost(postId.toString())).unwrap();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to delete post");
    }
  };

  let content: React.ReactNode;

  if (isLoading) {
    content = <Text>Loading post...</Text>;
  } else if (isSuccess && post) {
    content = (
      <>
        {!isEdit ? (
          <Text style={styles.postTitle}>{post.title}</Text>
        ) : (
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Edit Title"
            placeholderTextColor="#999"
            style={styles.editInput}
            autoFocus
          />
        )}
        <Text>{post.content}</Text>
        {!isEdit ? (
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => {
                setIsEdit(true);
                setTitle(post.title);
              }}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.button, styles.deleteButton]}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row", marginTop: 8, gap: 16 }}>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleEdit}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEdit(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }

  return <View style={styles.postContainer}>{content}</View>;
};

// Styles
const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "white",
    padding: 16,
    marginHorizontal: 6,
    marginVertical: 8,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e5e9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
    lineHeight: 24,
  },
  postContent: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  editInput: {
    fontSize: 16,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  contentInput: {
    height: 80,
    fontSize: 14,
    fontWeight: "400",
  },
  actionsContainer: {
    flexDirection: "row",
    marginTop: 4,
    gap: 12,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    backgroundColor: "#e3f2fd",
  },
  editButtonText: {
    color: "#1976d2",
    fontWeight: "600",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#ffebee",
  },
  deleteButtonText: {
    color: "#d32f2f",
    fontWeight: "600",
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: "#1976d2",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cancelButtonText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default PostDetail;
