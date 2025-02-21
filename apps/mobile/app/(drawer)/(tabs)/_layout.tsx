import { Tabs } from "expo-router";
import PrimaryTabs from "@/components/navigation/PrimaryTabs";
import { DrawerToggleButton } from "@react-navigation/drawer";
const PrimaryTabsLayout = () => {
  return (
    <Tabs
      initialRouteName="feed"
      tabBar={(props) => <PrimaryTabs {...props} />}
      backBehavior="history"
      screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}
    >
      <Tabs.Screen
        name="feed"
        options={{ href: "/feed/screens", animation: "fade", title: "Feed" }}
      />
      <Tabs.Screen
        name="connections"
        options={{
          href: "/connections/screens",
          animation: "fade",
          title: "Connections",
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          href: "/community/screens",
          animation: "fade",
          title: "Community",
        }}
      />
      <Tabs.Screen
        name="wellness"
        options={{
          href: "/wellness/screens",
          animation: "fade",
          title: "Wellness",
        }}
      />
    </Tabs>
  );
};

export default PrimaryTabsLayout;
