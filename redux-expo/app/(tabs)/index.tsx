import { SafeAreaView } from "react-native-safe-area-context";
import PostsList from "@/components/PostsList";
import CounterPage from "@/pages/CounterPage";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <CounterPage />
      <PostsList />
    </SafeAreaView>
  );
}
