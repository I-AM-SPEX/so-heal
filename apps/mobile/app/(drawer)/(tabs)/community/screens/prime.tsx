import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const CommunitiesScreen = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 bg-white"
    >
      <Text>CommunitiesScreen</Text>
    </Animated.View>
  );
};

export default CommunitiesScreen;
