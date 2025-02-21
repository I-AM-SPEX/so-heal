import Header from "@/components/navigation/Header";
import { Stack } from "expo-router";

const CommunitiesScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="screens" options={{ headerShown: false }} />
    </Stack>
  );
};

export default CommunitiesScreenLayout;
