import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Import Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Assets import
import Logo from "../../assets/images/oloha-logo.png";
import { router } from "expo-router";

export default function Welcome() {
	return (
		<SafeAreaView className="flex-1 bg-primary">
			<View className="flex-1 justify-between">
				<StatusBar style="dark" />
				<View className="w-full flex-[0.5] flex justify-center items-center">
					<View className="flex flex-row items-center gap-5">
						<Image source={Logo} className="mb-5 w-20 h-20" />
						<Text
							style={{ fontFamily: "gilroy-bold" }}
							className="text-[#000] text-4xl"
						>
							Oloha
						</Text>
					</View>
				</View>

				<View className="flex flex-[0.5] bg-[#F1F1F5] py-4 px-6 mx-4 mb-2 justify-between rounded-xl">
					<View className="">
						<Text
							className="text-2xl mb-2"
							style={{ fontFamily: "gilroy-semibold" }}
						>
							Welcome to Oloha
						</Text>
						<Text
							className="text-base mb-5"
							style={{ fontFamily: "gilroy-regular" }}
						>
							Live life with no excuses, travel with no regret
						</Text>
					</View>
					<View className="">
						{/* Sign in with apple */}
						<TouchableOpacity className="bg-dark py-4 rounded-xl flex flex-row items-center justify-center">
							<View className="mr-3">
								<AntDesignIcon name="apple1" size={20} color="white" />
							</View>
							<Text
								className="text-[#fff] text-center text-base"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Sign in with Apple
							</Text>
						</TouchableOpacity>

						{/* Continue with Google */}
						<TouchableOpacity className="bg-[#CF4232] py-4 rounded-xl my-2 flex flex-row items-center justify-center">
							<View className="mr-3">
								<AntDesignIcon name="google" size={20} color="white" />
							</View>
							<Text
								className="text-[#fff] text-center text-base"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Continue with Google
							</Text>
						</TouchableOpacity>

						{/* Continue with Facebook */}
						<TouchableOpacity className="bg-[#3C66C3] py-4 rounded-xl flex flex-row items-center justify-center">
							<View className="mr-3">
								<FontAwesome name="facebook" size={24} color="white" />
							</View>
							<Text
								className="text-[#fff] text-center text-base"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Continue with Facebook
							</Text>
						</TouchableOpacity>

						<Text
							className="text-base text-center my-2 underline"
							style={{ fontFamily: "gilroy-medium" }}
						>
							Continue as Guest
						</Text>

						{/* Or with lines */}
						<View className="flex items-center">
							<View style={styles.linecontainer} className="gap-3">
								{/* View for a line */}
								<View style={styles.line} />
								<Text className="text-base">or</Text>
								<View style={styles.line} />
							</View>
						</View>
					</View>

					{/* Login or Sign up */}
					<View className="flex flex-row justify-between">
						<TouchableOpacity
							className="bg-primary py-4 rounded-xl w-[48%]"
							onPress={() => router.push("signin")}
						>
							<Text
								className="text-dark text-center text-base first-letter"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Sign In
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className="bg-dark py-4 rounded-xl w-[48%]"
							onPress={() => router.push("signup")}
						>
							<Text
								className="text-[#fff] text-center text-base"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Sign up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	linecontainer: {
		flexDirection: "row", // Align items in a row
		alignItems: "center", // Center the text vertically
		width: "60%", // Make sure the line spans the full width
	},
	line: {
		flex: 1, // Take up equal space on both sides
		height: 1, // Height of the line
		backgroundColor: "#ccc", // Line color (you can change it as needed)
	},
});
