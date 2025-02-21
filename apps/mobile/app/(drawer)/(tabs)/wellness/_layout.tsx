import Header from "@/components/navigation/Header";
import { Stack } from "expo-router";
import { View, Text } from "lucide-react-native";

const WellnessScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="screens" options={{ headerShown: false }} />
    </Stack>
  );
};

export default WellnessScreenLayout;
