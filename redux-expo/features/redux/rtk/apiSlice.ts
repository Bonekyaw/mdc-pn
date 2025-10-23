import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../postsSlice";

const API_URL = "http://192.168.100.122:4000";

// Get /posts  - get all posts
// Get /posts/:id - get post by id
// POST /posts - create a new post
// PATCH /posts/:id - update a post
// DELETE /posts/:id - delete a post

export const apiSlice = createApi({
  reducerPath: "api", // optional, defaults to 'api'
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
