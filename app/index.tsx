import { Image, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/images/oloha-logo.png";

const RootPage = () => {
	return (
		<SafeAreaView className="flex-1 bg-primary justify-center items-center">
			<View>
				<Image source={Logo} className="mb-5" />

				<Text className="text-4xl text-main">Hello</Text>
				<Link href={"/"}> Go to </Link>
			</View>
		</SafeAreaView>
	);
};

export default RootPage;
