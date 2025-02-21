import { View, Text, Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const SecondaryTab = createMaterialTopTabNavigator();
const SecondaryTabs = ({ screens, initialRouteName }) => {
  return (
    <SecondaryTab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderColor: "#e5e7eb",
        },
        tabBarIndicatorStyle: { backgroundColor: "#3b82f6" },
        tabBarPressColor: "transparent",
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#6b7280",
        lazy: true,
        lazyPreloadDistance: 1,
      }}
    >
      {screens.map((screen) => (
        <SecondaryTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ tabBarLabel: screen.label }}
        />
      ))}
    </SecondaryTab.Navigator>
  );
};

export default SecondaryTabs;
