import {
	Image,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Import Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Assets import
import Logo from "../../assets/images/oloha-logo.png";
import { Link, router } from "expo-router";
import { textFont } from "../constants/styles.global";

export default function Signin() {
	return (
		<SafeAreaView className="flex-1 bg-primary">
			<View className="flex-1 justify-between">
				<StatusBar style="dark" />
				<View className="w-full flex-[0.4] flex justify-center items-center">
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

				<View className="flex flex-[0.6] justify-between bg-[#F1F1F5] py-4 px-6 mx-4 mb-2 rounded-xl">
					<View className="">
						<Text
							className="text-2xl mb-2"
							style={{ fontFamily: "gilroy-semibold" }}
						>
							Welcome back
						</Text>
						<Text
							className="text-base mb-5"
							style={{ fontFamily: "gilroy-regular" }}
						>
							Please log in to your account
						</Text>

						{/* Input fields */}
						<View>
							<TextInput
								style={[textFont.regular, { paddingLeft: 15 }]}
								className="mb-3 border border-[#E2E2EA] rounded-lg py-3 placeholder:text-sm"
								placeholder="Email or Phone number"
							/>
							<TextInput
								style={[textFont.regular, { paddingLeft: 15 }]}
								className="mb-2 border border-[#E2E2EA] rounded-lg py-3 placeholder:text-sm"
								placeholder="Password"
							/>

							<View className="flex items-end mb-4">
								<Link href={"/"} style={[textFont.regular]}>
									Forgot Password?
								</Link>
							</View>
						</View>
					</View>

					<View>
						{/* Sign in */}
						<TouchableOpacity
							className="bg-primary py-4 rounded-xl w-full mb-4"
							onPress={() => router.push("signin")}
						>
							<Text
								className="text-dark text-center text-base first-letter"
								style={[textFont.bold]}
							>
								Sign In
							</Text>
						</TouchableOpacity>

						<Text
							className="text-base text-center my-2 mb-4"
							style={{ fontFamily: "gilroy-medium" }}
						>
							Do you have an account?
							<Link href={"/signup"} className="text-primary">
								{" "}
								Sign up
							</Link>
						</Text>

						{/* Or with lines */}
						<View className="flex items-center my-2 mb-4">
							<View style={styles.linecontainer} className="gap-3">
								{/* View for a line */}
								<View style={styles.line} />
								<Text className="text-base text-[#B5B5BE]">
									or Continue with
								</Text>
								<View style={styles.line} />
							</View>
						</View>

						{/* Login with socials */}
						<View className="flex flex-row h-16 justify-between">
							{/* Sign in with apple */}
							<TouchableOpacity className="w-[30%] bg-dark py-4 rounded-xl flex flex-row items-center justify-center">
								<View className="mr-3">
									<AntDesignIcon name="apple1" size={20} color="white" />
								</View>
							</TouchableOpacity>

							{/* Continue with Google */}
							<TouchableOpacity className="w-[30%] bg-[#CF4232] py-4 rounded-xl flex flex-row items-center justify-center">
								<View className="mr-3">
									<AntDesignIcon name="google" size={20} color="white" />
								</View>
							</TouchableOpacity>

							{/* Continue with Facebook */}
							<TouchableOpacity className="w-[30%] bg-[#3C66C3] py-4 rounded-xl flex flex-row items-center justify-center">
								<View className="mr-3">
									<FontAwesome name="facebook" size={24} color="white" />
								</View>
							</TouchableOpacity>
						</View>
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
