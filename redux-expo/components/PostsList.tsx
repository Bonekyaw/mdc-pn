import {
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";

import {
  useAppSelector,
  // useAppDispatch
} from "@/hooks/useRedux";
import // fetchPosts,
// addPost,
// selectAllPosts,
// selectPostsByUser,
// selectPostIds,
// selectPostsStatus,
// selectPostsError,
"@/features/redux/postsSlice";
import PostItem from "./PostDetail";
// import {
//   useGetPostsQuery,
//   // useAddNewPostMutation,
// } from "@/features/redux/rtk/postsSlice";
import PostsInput from "./PostInput";
import {
  // selectAllPosts,
  // selectPostsByUser,
  selectPostsIdsByUser,
} from "@/features/redux/rtk/postsSlice";

export default function PostsList() {
  // const dispatch = useAppDispatch();
  // const { status, error } = useAppSelector((state) => state.posts);
  // const posts = useAppSelector((state) => selectPostsByUser(state, "2"));
  const postsIds = useAppSelector((state) => selectPostsIdsByUser(state, "2"));
  // const posts = useAppSelector(selectAllPosts);
  // const userPosts = posts.filter((post) => post.userId === "2");

  // const postIds = useAppSelector(selectPostIds); // ["p1", "p2", "p3"]
  // const error = useAppSelector(selectPostsError);
  // const status = useAppSelector(selectPostsStatus);

  // const {
  //   data: posts = [],
  //   isLoading,
  //   // isFetching,
  //   isSuccess,
  //   isError,
  //   error,
  //   // refetch,
  // } = useGetPostsQuery();

  // const [pending, setPending] = useState(false);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, status]);

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

  return (
    <>
      <Text style={styles.title}>RTK query</Text>
      {/* {isError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.toString()}</Text>
        </View>
      )} */}
      <PostsInput />
      {/* {isLoading && (
        <>
          <ActivityIndicator size="large" color="green" />
          <Text>Loading posts ...</Text>
        </>
      )} */}
      <FlatList
        data={postsIds}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PostItem postId={item} />}
      />
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
