import {View, Text, SafeAreaView, Image} from "react-native";
import React, {useEffect} from "react";
import Logo from "../../../assets/images/oloha-logo.png";

const Start = ({navigation}) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate("Onboard1");
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<SafeAreaView className="flex-1 bg-primary">
			<View className="flex-1 justify-center items-center">
				<Image source={Logo} className="mb-5" />
				<Text
					style={{fontFamily: "gilroy-bold"}}
					className="text-[#fff] text-4xl">
					Oloha
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Start;
