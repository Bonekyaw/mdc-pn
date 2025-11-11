import { apiSlice } from "./apiSlice";
import { Post } from "../postsSlice";

// Get /posts  - get all posts
// Get /posts/:id - get post by id
// POST /posts - create a new post
// PATCH /posts/:id - update a post
// DELETE /posts/:id - delete a post

export const apiSliceWithPosts = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      //   providesTags: ["Post"],
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id } as const)),
      ],
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
    }),
    addNewPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation<Post, Partial<Post>>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH", // PUT
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSliceWithPosts;
