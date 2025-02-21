import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import {
  House,
  PersonStanding,
  UserRound,
  UsersRound,
} from "lucide-react-native";
import { useEffect } from "react";
import CustomDrawerInfo from "./CustomDrawerInfo";
const CustomDrawer = (props) => {
  const pathName = usePathname().split("/")[1];

  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerInfo
        image="https://randomuser.me/api/portraits/men/70.jpg"
        username="@HIM"
        connectionCount="20"
      />
      <DrawerItem
        icon={({ color, size }) => (
          <House size={size} color={pathName == "feed" ? "#fff" : "#000"} />
        )}
        label={"Feed"}
        labelStyle={{
          fontSize: 18,
          color: pathName == "feed" ? "#fff" : "#000",
        }}
        style={{ backgroundColor: pathName == "feed" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/feed/screens");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <UserRound
            size={size}
            color={pathName == "connections" ? "#fff" : "#000"}
          />
        )}
        label={"Connections"}
        labelStyle={{
          fontSize: 18,
          color: pathName == "connections" ? "#fff" : "#000",
        }}
        style={{ backgroundColor: pathName == "connections" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/connections/screens");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <UsersRound
            size={size}
            color={pathName == "community" ? "#fff" : "#000"}
          />
        )}
        label={"Community"}
        labelStyle={{
          fontSize: 18,
          color: pathName == "community" ? "#fff" : "#000",
        }}
        style={{ backgroundColor: pathName == "community" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/community/screens");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <PersonStanding
            size={size}
            color={pathName == "wellness" ? "#fff" : "#000"}
          />
        )}
        label={"Wellness"}
        labelStyle={{
          fontSize: 18,
          color: pathName == "wellness" ? "#fff" : "#000",
        }}
        style={{ backgroundColor: pathName == "wellness" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/wellness/screens");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
