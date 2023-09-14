import {useState, useEffect} from "react";
import * as Font from "expo-font";
// import "react-native-gesture-handler";
// import "react-native-safe-area-context";
import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			// Gilroy
			"gilroy-bold": require("./assets/fonts/gilroy/Gilroy-Bold.ttf"),
			"gilroy-regular": require("./assets/fonts/gilroy/Gilroy-Regular.ttf"),
			"gilroy-medium": require("./assets/fonts/gilroy/Gilroy-Medium.ttf"),
			"gilroy-semibold": require("./assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
		});
		setFontsLoaded(true);
	};
	useEffect(() => {
		loadFonts();
	}, []);

	return fontsLoaded && <MainNavigation />;
}
