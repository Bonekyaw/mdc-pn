import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const POST_API_URL = "http://192.168.100.109:4000/posts";

export interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POST_API_URL);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data; // As Payload
});

// 1. posts/fetchPosts/start
// 2. type: posts/fetchPosts/success , payload: response.data
// Or type: posts/fetchPosts/failure , payload: response.error.message

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default postsSlice.reducer;
