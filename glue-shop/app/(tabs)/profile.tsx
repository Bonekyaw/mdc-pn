import { Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { base_url } from "@/constants";
import { Image } from "expo-image";

type User = {
  id: string;
  name: string;
};

const fetchUsers = async () => {
  const response = await fetch(base_url + "users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Profile = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <SafeAreaView>
      <Text>User List .........</Text>
      <Image
        style={{
          width: "50%",
          aspectRatio: 1 / 1,
          borderRadius: 5,
        }}
        source={{ uri: base_url + "baby.png" }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        users.map((user) => <Text key={user.id}>{user.name}</Text>)
      )}
    </SafeAreaView>
  );
};

export default Profile;
