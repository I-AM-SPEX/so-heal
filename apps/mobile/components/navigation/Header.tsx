import { usePathname, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  console.log("Here is calling use path");
  const currentTab = pathName.split("/")[1] || "sam";
  console.log("The current currentTab name", currentTab);
  const title = currentTab.charAt(0).toUpperCase() + currentTab.slice(1);

  return (
    <View className="flex-row items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
      <View className="w-8 h-8">
        <Text>so-heal</Text>
      </View>
      <Text className="text-lg font-semibold">{title}</Text>
      <TouchableOpacity className="p-2 rounded-full bg-blue-500">
        <Text className="text-white">Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
