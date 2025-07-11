import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/authStore";

const Profile = () => {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          logout();
        }}
      >
        Sign Out
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
