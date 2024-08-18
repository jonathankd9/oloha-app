import { StyleSheet } from "react-native";

const textFont = StyleSheet.create({
  regular: {
    fontFamily: "poppins-regular",
  },
  medium: {
    fontFamily: "poppins-medium",
  },
  semi: {
    fontFamily: "poppins-semi",
  },
  bold: {
    fontFamily: "poppins-bold",
  },
  black: {
    fontFamily: "poppins-black",
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
  main: "#fff",
  primary: "#00C9FF",
  gray: "#9E9E9E",
  black: "#231F20",
  smoke: "#f5f5f5",
  light: "#80e4ff",
};

export { textFont, textSize, colors, sizes };
