import { View, Text, Image } from "react-native";
import React from "react";

const CustomDrawerInfo = ({ image, username, connectionCount }) => {
  return (
    <View>
      <Image source={{ uri: image }} height={80} width={80} />
      <Text>
        {username} {connectionCount}
      </Text>
    </View>
  );
};

export default CustomDrawerInfo;
