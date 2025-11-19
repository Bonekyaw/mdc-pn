import { apiSlice } from "./apiSlice";
import { Post } from "../postsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
      // Pessimistic Update
      // invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
      // Optimistic Update ( Updating the cache before the request has finished.)
      async onQueryStarted({ id, title }, { dispatch, queryFulfilled }) {
        const getPostsPatchResult = dispatch(
          apiSliceWithPosts.util.updateQueryData(
            "getPosts",
            undefined,
            (draft) => {
              const post = draft.find((post) => post.id === id);
              if (post) {
                post.title = title!;
              }
            }
          )
        );

        const getPostPatchResult = dispatch(
          apiSliceWithPosts.util.updateQueryData("getPost", id!, (draft) => {
            draft.title = title!;
          })
        );

        try {
          await queryFulfilled;
        } catch {
          getPostsPatchResult.undo();
          getPostPatchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSliceWithPosts;

export const selectPostsResult = apiSliceWithPosts.endpoints.getPosts.select();

const emptyPosts: Post[] = [];

export const selectAllPosts = createSelector(
  selectPostsResult,
  (postResult) => postResult.data ?? emptyPosts
);

export const selectPostsByUser = createSelector(
  selectAllPosts,
  (state: RootState, userId: string) => userId,
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const selectPostsIdsByUser = createSelector(
  selectAllPosts,
  (state: RootState, userId: string) => userId,
  (posts, userId) =>
    posts.filter((post) => post.userId === userId).map((post) => post.id)
);
