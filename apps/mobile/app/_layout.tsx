import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "./global.css";
export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />

        <Stack.Screen name="(drawer)" options={{ gestureEnabled: false }} />
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
