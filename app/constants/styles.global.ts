import { StyleSheet } from "react-native";

const textFont = StyleSheet.create({
	regular: {
		fontFamily: "gilroy-regular",
	},
	medium: {
		fontFamily: "gilroy-medium",
	},
	semi: {
		fontFamily: "gilroy-semi",
	},
	bold: {
		fontFamily: "gilroy-bold",
	},
	black: {
		fontFamily: "gilroy-black",
	},
});

const textSize = StyleSheet.create({
	xs: {
		fontSize: 10,
	},
	sm: {
		fontSize: 12,
	},
	base: {
		fontSize: 14,
	},
	lg: {
		fontSize: 16,
	},
	xl: {
		fontSize: 18,
	},
	twoXl: {
		fontSize: 22,
	},
	threeXl: {
		fontSize: 25,
	},
	fourXl: {
		fontSize: 30,
	},
	fiveXl: {
		fontSize: 36,
	},
});

const sizes = {
	xSmall: 5,
	small: 10,
	normal: 15,
	large: 30,
	xl: 40,
	xxl: 50,
};

const colors = {
	primary: "#FEBD2F",
	secondary: "#151940",
	tertiary: "#314BCE",
	placeholder: "#696974",
	light: "#fff",
};

export { textFont, textSize, colors, sizes };
