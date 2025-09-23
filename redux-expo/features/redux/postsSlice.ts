import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { createAppAsyncThunk } from "./withTypes";
import { RootState } from "./store";

const POST_API_URL = "http://192.168.100.114:4000/posts";

export interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
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

// 1. posts/fetchPosts/pending
// 2. type: posts/fetchPosts/fulfilled , payload: response.data
// Or type: posts/fetchPosts/rejected , payload: response.error.message

export const addPost = createAppAsyncThunk(
  "posts/addPost",
  async (post: Omit<Post, "id">) => {
    const response = await axios.post(POST_API_URL, post);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data;
  }
);

// PUT http://192.168.100.109:4000/posts/id
export const updatePost = createAppAsyncThunk(
  "posts/updatePost",
  async (post: Partial<Post>) => {
    const response = await axios.patch(`${POST_API_URL}/${post.id}`, post);
    return response.data;
  }
);

// Delete http://192.168.100.109:4000/posts/id
export const deletePost = createAppAsyncThunk(
  "posts/deletePost",
  async (id: string) => {
    await axios.delete(`${POST_API_URL}/${id}`);
    return id;
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
      })
      // Updating an existing post
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
        const { id, title } = action.payload;
        const existingPost = state.items.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          // existingPost.content = content;
        }
        // const index = state.items.findIndex(
        //   (post) => post.id === action.payload.id
        // );
        // if (index !== -1) state.items[index] = action.payload;
      })
      // Deleting a post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((post) => post.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectAllPosts = (state: RootState) => state.posts.items;

// Wrong function
// export const selectPostsByUser = (state: RootState, userId: string) => {
//   const allPosts = selectAllPosts(state);
//   return allPosts.filter((post) => post.userId === userId);
// };

// Memoized Selector
// selectPostsByUser(state, "2")
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state: RootState, userId: string) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);
