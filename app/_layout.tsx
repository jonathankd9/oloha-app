import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
	const [loaded] = useFonts({
		"gilroy-bold": require("./../assets/fonts/gilroy/Gilroy-Bold.ttf"),
		"gilroy-regular": require("./../assets/fonts/gilroy/Gilroy-Regular.ttf"),
		"gilroy-medium": require("./../assets/fonts/gilroy/Gilroy-Medium.ttf"),
		"gilroy-semibold": require("./../assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			{/* <Stack.Screen name="onboard1" /> */}
		</Stack>
	);
}
