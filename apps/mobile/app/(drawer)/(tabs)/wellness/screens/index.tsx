import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const WellnessProfileScreen = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 bg-white"
    >
      <Text>WellnessProfileScreen</Text>
    </Animated.View>
  );
};

export default WellnessProfileScreen;
