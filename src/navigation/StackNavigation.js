import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	Onboard1,
	Onboard2,
	Onboard3,
	Start,
	Welcome,
} from "../screens/onboard/";
import { SignIn } from "../screens/auth";

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Start" component={Start} />
			<Stack.Screen name="Onboard1" component={Onboard1} />
			<Stack.Screen name="Onboard2" component={Onboard2} />
			<Stack.Screen name="Onboard3" component={Onboard3} />
			<Stack.Screen name="Welcome" component={Welcome} />
		</Stack.Navigator>
	);
};

// Auth Stack
const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="SignIn" component={SignIn} />
		</Stack.Navigator>
	);
};

// Before Home Stack
const BeforeHomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{/* <Stack.Screen name="TurnOnLocation" component={TurnOnLocation} /> */}
			{/* <Stack.Screen name="TurnOnNotification" component={TurnOnNotification} /> */}
			{/* <Stack.Screen name="BeforeHome" component={BeforeHome} /> */}
		</Stack.Navigator>
	);
};

// Main Stack that brings everything together
const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Onboarding" component={OnboardingStack} />
				<Stack.Screen name="Auth" component={AuthStack} />
				{/* <Stack.Screen name="BeforeHome" component={BeforeHomeStack} /> */}
				{/* Add your Home screen here */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
