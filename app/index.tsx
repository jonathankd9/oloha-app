import { Image, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
// import Logo from "../assets/images/oloha-logo.png";

const RootPage = () => {
	return (
		<SafeAreaView>
			<View>
				<Text className="text-lg">Hello</Text>
			</View>
		</SafeAreaView>
	);
};

export default RootPage;
