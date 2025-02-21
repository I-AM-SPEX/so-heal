import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const ConnectionsScreen = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 bg-white"
    >
      <Text>ConnectionsScreen</Text>
    </Animated.View>
  );
};

export default ConnectionsScreen;
