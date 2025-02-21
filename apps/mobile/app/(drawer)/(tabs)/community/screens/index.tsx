import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
const MyCommunitiesScreen = () => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="flex-1 bg-white"
    >
      <Text>MyCommunitiesScreen</Text>
    </Animated.View>
  );
};

export default MyCommunitiesScreen;
