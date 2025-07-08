import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "../../providers/ctx";

const Profile = () => {
  const { signOut } = useSession();

  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
