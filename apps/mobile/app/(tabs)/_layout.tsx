import { Tabs } from "expo-router";
import PrimaryTabs from "@/components/navigation/PrimaryTabs";
const PrimaryTabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home/index"
      tabBar={(props) => <PrimaryTabs {...props} />}
      backBehavior="history"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="home/index"
        options={{ href: "/(tabs)/home", animation: "fade" }}
      />
      <Tabs.Screen
        name="connect/index"
        options={{ href: "/(tabs)/connect", animation: "fade" }}
      />
      <Tabs.Screen
        name="communities/index"
        options={{ href: "/(tabs)/communities", animation: "fade" }}
      />
      <Tabs.Screen
        name="wellness/index"
        options={{ href: "/(tabs)/wellness", animation: "fade" }}
      />
    </Tabs>
  );
};

export default PrimaryTabsLayout;
