import { View, Pressable, Text } from "react-native";
import { Href, Link, usePathname } from "expo-router";
import { Home, User, Bell, Settings } from "lucide-react";
import { tabsPathMaker } from "@/app/utils/helpers";

const TabBar = ({ state, navigation }) => {
  const pathName = usePathname();

  const tabs = [
    { name: "home", icon: Home, label: "Home" },
    { name: "connect", icon: User, label: "Connect" },
    { name: "community", icon: Home, label: "Community" },
    { name: "wellness", icon: Home, label: "Wellness" },
  ];
  return (
    <View className="flex-row items-center justify-around bg-white border-t border-gray-200 h-16 px-4">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = state.index === index;
        return (
          <Link key={tab.name} href={`/(tabs)/${tab.name}` as Href} asChild>
            <Pressable className="items-center">
              <Icon size={24} color={isActive ? "#0284c7" : "#64748b"} />
              <Text></Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
};

export default TabBar;
