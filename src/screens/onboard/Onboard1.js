import {View, Text, Image} from "react-native";
import React from "react";
import Background from "../../../assets/images/background-image.png";

const Onboard1 = () => {
	return (
		<View className="items-center">
			
			<View className="cover w-72">
				<Image source={Background} alt="" className="w-fit" />
			</View>
			<Text>Discover Amazing Place</Text>
			<Text>
				Plan Your Trip, choose your desination. Pick the best localguide for
				your holiday
			</Text>
		</View>
	);
};

export default Onboard1;
