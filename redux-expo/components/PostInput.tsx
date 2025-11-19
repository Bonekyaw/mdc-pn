import { useState, memo } from "react";
import {
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useAddNewPostMutation } from "@/features/redux/rtk/postsSlice";

function PostsInput() {
  const [addNewPost, { isLoading: isAddingNewPostLoading }] =
    useAddNewPostMutation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    //setPending(true);
    try {
      // await dispatch(addPost({ title, content, userId: "2" })).unwrap();
      await addNewPost({ title, content, userId: "2" }).unwrap();
      setTitle("");
      setContent("");
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to add post");
    } finally {
      // setPending(false);
    }
  };

  return (
    <>
      <TextInput
        placeholder="Enter title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Enter Content"
        placeholderTextColor="#999"
        value={content}
        onChangeText={setContent}
        multiline
        style={[styles.textInput, styles.contentInput]}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        disabled={isAddingNewPostLoading}
        style={styles.button}
      >
        <Text style={styles.saveButtonText}>
          {isAddingNewPostLoading ? "Adding Post..." : "Add Post"}
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={refetch} style={styles.button}>
        <Text style={styles.saveButtonText}>Refetch Posts</Text>
      </TouchableOpacity> */}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    marginTop: 16,
  },
  errorContainer: {
    backgroundColor: "#FFE6E6",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#FF3B30",
    marginBottom: 16,
  },
  errorText: {
    color: "#D70015",
    fontSize: 14,
    fontWeight: "500",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contentInput: {
    height: 100,
    textAlignVertical: "top",
  },
  inputError: {
    borderColor: "#FF3B30",
    backgroundColor: "#FFF5F5",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    borderRadius: 6,
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1976d2",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default memo(PostsInput);
