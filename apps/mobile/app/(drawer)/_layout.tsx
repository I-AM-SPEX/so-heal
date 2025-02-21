import { Drawer } from "expo-router/drawer";
import Header from "@/components/navigation/Header";
import CustomDrawer from "@/components/navigation/CustomDrawer";
const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer />}
      screenOptions={{ headerShown: false }}
    />
  );
};

export default DrawerLayout;
