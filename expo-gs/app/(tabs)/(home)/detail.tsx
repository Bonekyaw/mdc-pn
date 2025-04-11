import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View>
      <Text>detail screen : {id}</Text>
      <Link href="/event">Navigate Event</Link>
      <Link href="/detail?id=123" push>
        Push Another Detail
      </Link>
      <Link href="/event" replace>
        Replace Event
      </Link>
      <Button
        title="Navigate Event"
        onPress={() => router.navigate("/event")}
      />
      <Button title="Replace Event" onPress={() => router.replace("/event")} />
      <Button
        title="Push Another Detail"
        onPress={() =>
          router.push({ pathname: "/detail", params: { id: 123 } })
        }
      />
      <Button
        title="Still in Detail"
        onPress={() => router.setParams({ id: 456 })}
      />
    </View>
  );
}
