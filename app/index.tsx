import { Image, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary justify-center items-center">
      <View>
        <Text className="text-7xl text-main">Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default RootPage;
