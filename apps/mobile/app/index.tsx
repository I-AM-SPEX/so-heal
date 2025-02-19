import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg">Entry Screen.</Text>
      <Button
        title="Go to Welcome page"
        onPress={() => router.push("/(auth)/welcome")}
      />
      <Button
        title="Go to main content"
        onPress={() => router.push("/(tabs)/home")}
      />
    </View>
  );
}
