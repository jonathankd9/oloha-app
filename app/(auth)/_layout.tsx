import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function AuthLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="onboard1" options={{ headerShown: false }} />
			<Stack.Screen name="onboard2" options={{ headerShown: false }} />
			<Stack.Screen name="onboard3" options={{ headerShown: false }} />
			<Stack.Screen name="welcome" options={{ headerShown: false }} />
			<Stack.Screen name="signin" options={{ headerShown: false }} />
		</Stack>
	);
}
