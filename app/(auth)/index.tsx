import { Image, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/images/oloha-logo.png";
import { textFont } from "../constants/styles.global";

export default function RootPage() {
	return (
		<SafeAreaView className="flex-1 bg-primary items-center justify-center">
			<Link href={"/onboard1"}>
				<View>
					<Image source={Logo} className="mb-5" />
					<Text className="text-4xl text-main" style={[textFont.bold]}>
						Oloha
					</Text>
				</View>
			</Link>
		</SafeAreaView>
	);
}
