import { Tabs } from "expo-router";
import PrimaryTabs from "@/components/navigation/PrimaryTabs";
const PrimaryTabsLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <PrimaryTabs {...props} />}
      //backBehavior="history"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="feed"
        options={{ href: "/feed/screens", animation: "fade" }}
      />
      <Tabs.Screen
        name="connections"
        options={{ href: "/connections/screens", animation: "fade" }}
      />
      <Tabs.Screen
        name="community"
        options={{ href: "/community/screens", animation: "fade" }}
      />
      <Tabs.Screen
        name="wellness"
        options={{ href: "/wellness/screens", animation: "fade" }}
      />
    </Tabs>
  );
};

export default PrimaryTabsLayout;
