import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { createAppAsyncThunk } from "./withTypes";
import { RootState } from "./store";

const POST_API_URL = "http://192.168.100.109:4000/posts";

export interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostsState {
  items: Post[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAppAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get(POST_API_URL);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data; // As Payload
  },
  {
    condition(arg, thunkApi) {
      const postsStatus = selectPostsStatus(thunkApi.getState());
      if (postsStatus !== "idle") {
        return false;
      }
    },
  }
);

// 1. posts/fetchPosts/start
// 2. type: posts/fetchPosts/success , payload: response.data
// Or type: posts/fetchPosts/failure , payload: response.error.message

export const addPost = createAppAsyncThunk(
  "posts/addPost",
  async (post: Omit<Post, "id">) => {
    const response = await axios.post(POST_API_URL, post);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.items.push(...action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch posts";
      })
      // Adding new Post case
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Failed to add post";
      });
  },
});

export default postsSlice.reducer;
export const selectPostsStatus = (state: RootState) => state.posts.status;
