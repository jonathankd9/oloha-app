import {View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import Background from "../../../assets/images/circle.png";
import Image3 from "../../../assets/images/image3.png";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";

const Onboard3 = ({navigation}) => {
	return (
		<SafeAreaView className="flex-1">
			<View className="bg-[#fff] flex-1 justify-between">
				<StatusBar style="light" />
				<View className="w-full flex-[0.4] flex justify-center -mt-24 items-center">
					<Image source={Background} alt="" className="w-full z-0 relative" />
					<Image source={Image3} className="z-10 absolute top-52" />
				</View>

				<View className="flex flex-[0.3] bg-[#F1F1F5] py-8 px-12 mx-4 my-2 justify-between rounded-xl">
					<View className="items-center">
						<Text
							className="text-2xl mb-3 text-center"
							style={{fontFamily: "gilroy-semibold"}}>
							Share Your Adventures
						</Text>
						<Text
							className="text-base text-center"
							style={{fontFamily: "gilroy-regular"}}>
							Enjoy your holiday! don't forget to take a photo and share to the
							world
						</Text>
					</View>
					{/* Dots */}
					<View className="gap-2">
						<TouchableOpacity className="bg-[#000] py-4 items-center rounded-xl">
							<Text
								className="text-base text-[#fff]"
								style={{fontFamily: "gilroy-semibold"}}>
								Get Started
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className=" py-2 items-center">
							<Text
								className="text-placeholder text-[15px]"
								style={{fontFamily: "gilroy-medium"}}>
								Skip For Now
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Onboard3;
