import { createStackNavigator } from "react-navigation";
import { MainView, Settings } from "../screens";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	headerSt: {
		backgroundColor: "red",
		borderWidth: 1
	}
});
//
// const MainNavigator = createStackNavigator(
// 	{
// 		MainView: {
// 			screen: MainView
// 		}
// 	},
// 	{
// 		headerTransparent: "true",
// 		headerStyle: styles.headerSt
// 	}
// );
const AppNavigator = createStackNavigator(
	{
		// MainNavigator: {
		// 	screen: MainNavigator
		// },
		MainView: {
			screen: MainView
		},
		Settings: {
			screen: Settings
		}
	},
	{
		mode: "modal",
		headerMode: "none"
	}
);

export default AppNavigator;
