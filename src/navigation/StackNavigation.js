import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Onboard1, Onboard2, Onboard3, Start} from "../screens/onboard/";

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="OnBoarding" component={OnBoarding} />
			{/* <Stack.Screen name="Mainscreen" component={HomeNavigation} /> */}
			{/* <Stack.Screen name="AuthNavigation" component={AuthNavigation} /> */}
		</Stack.Navigator>
	);
};

const OnBoarding = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Start" component={Start} />
			<Stack.Screen name="Onboard1" component={Onboard1} />
			<Stack.Screen name="Onboard2" component={Onboard2} />
			<Stack.Screen name="Onboard3" component={Onboard3} />

			{/* <Stack.Screen name="Welcome" component={Welcome} /> */}
		</Stack.Navigator>
	);
};

// const AuthNavigation = () => {
// 	return (
// 		<Stack.Navigator screenOptions={{headerShown: false}}>
// 			<Stack.Screen name="Createaccount" component={Createaccount} />
// 			<Stack.Screen name="Enternumber" component={Enternumber} />
// 			<Stack.Screen name="Verifycode" component={Verifycode} />
// 			<Stack.Screen name="Login" component={Login} />
// 			<Stack.Screen name="Forgetpassword" component={Forgetpassword} />
// 			<Stack.Screen name="Verified" component={Verified} />
// 		</Stack.Navigator>
// 	);
// };

// const HomeNavigation = () => {
// 	return (
// 		<Stack.Navigator screenOptions={{headerShown: false}}>
// 			<Stack.Screen name="Mainscreen" component={Mainscreen} />
// 		</Stack.Navigator>
// 	);
// };

export {OnBoarding, MainStack};
