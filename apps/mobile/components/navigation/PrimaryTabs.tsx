import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import React from "react";
import {
  House,
  PersonStanding,
  UserRound,
  UsersRound,
} from "lucide-react-native";

const { height } = Dimensions.get("window");
const hp = (percentage) => {
  return (height * percentage) / 100;
};

const PrimaryTabs = ({ state, descriptors, navigation }) => {
  const getBaseRouteName = (routeName) => routeName.split("/")[0];
  const icons = {
    feed: (props) => <House color="black" size={hp(2.5)} {...props} />,
    connections: (props) => (
      <UserRound color="black" size={hp(2.5)} {...props} />
    ),
    community: (props) => (
      <UsersRound color="black" size={hp(2.5)} {...props} />
    ),
    wellness: (props) => (
      <PersonStanding color="black" size={hp(2.5)} {...props} />
    ),
  };
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          // Learn what descriptors do. i can see it is being destructured
          const { options } = descriptors[route.key];
          //const baseRouteName = getBaseRouteName(route.name);
          console.log("here is the route name", route.name);
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          //current foucused state
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tab}
            >
              {icons[route.name] &&
                icons[route.name]({ focused: isFocused ? "true" : "false" })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: "auto",
    height: 100,
    backgroundColor: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PrimaryTabs;
