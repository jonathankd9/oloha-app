import { SafeAreaView, Image, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Logo from "../assets/images/oloha-logo.png";

const RootPage = () => {
	return (
		<SafeAreaView className="flex-1 bg-[#000]">
			<View className="flex-1 justify-center items-center">
				<Image source={Logo} className="mb-5" />
				<Text
					// style={{ fontFamily: "gilroy-bold" }}
					className="text-[#fff] text-4xl"
				>
					Oloha
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default RootPage;
