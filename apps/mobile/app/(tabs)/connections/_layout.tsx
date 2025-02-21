import Header from "@/components/navigation/Header";
import { Stack } from "expo-router";
import { View, Text } from "lucide-react-native";

const ConnectScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="screens" options={{ header: () => <Header /> }} />
    </Stack>
  );
};

export default ConnectScreenLayout;
