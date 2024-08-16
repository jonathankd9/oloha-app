import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Background from "../../../assets/images/circle.png";
import Image1 from "../../../assets/images/image1.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboard1 = ({ navigation }) => {
	return (
		<SafeAreaView className="flex-1">
			<View className="bg-[#fff] flex-1 justify-between">
				<StatusBar style="light" />
				<View className="w-full flex-[0.4] flex justify-center -mt-24 items-center">
					<Image source={Background} alt="" className="w-full z-0 relative" />
					<Image source={Image1} className="z-10 absolute top-56" />
				</View>

				<View className="flex flex-[0.3] bg-[#F1F1F5] py-8 px-12 mx-4 my-2 justify-between rounded-xl">
					<View className="items-center">
						<Text
							className="text-2xl mb-3 text-center"
							style={{ fontFamily: "gilroy-semibold" }}
						>
							Discover Amazing Place
						</Text>
						<Text
							className="text-base text-center"
							style={{ fontFamily: "gilroy-regular" }}
						>
							Plan Your Trip, choose your desination. Pick the best localguide
							for your holiday
						</Text>
					</View>
					{/* Dots */}
					<View className="gap-2">
						<TouchableOpacity
							className="bg-[#000] py-4 items-center rounded-xl"
							onPress={() => navigation.navigate("Onboard2")}
						>
							<Text
								className="text-base text-[#fff]"
								style={{ fontFamily: "gilroy-semibold" }}
							>
								Get Started
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className=" py-2 items-center "
							onPress={() => navigation.navigate("Welcome")}
						>
							<Text
								className="text-placeholder text-[15px]"
								style={{ fontFamily: "gilroy-medium" }}
							>
								Skip For Now
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Onboard1;
