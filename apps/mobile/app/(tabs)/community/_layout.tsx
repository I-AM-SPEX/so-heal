import Header from "@/components/navigation/Header";
import { Stack } from "expo-router";

const CommunitiesScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="screens" options={{ header: () => <Header /> }} />
    </Stack>
  );
};

export default CommunitiesScreenLayout;
