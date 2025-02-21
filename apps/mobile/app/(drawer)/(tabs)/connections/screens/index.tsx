import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const ConnectScreen = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 bg-white"
    >
      <Text>ConnectScreen</Text>
    </Animated.View>
  );
};

export default ConnectScreen;
