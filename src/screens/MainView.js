import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button, DeviceInfo } from "react-native";
import { observer, inject, PropTypes } from "mobx-react/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../styles/AppStyles";
import { BeachSelection, ScoreScale } from "../components";

const remote = require("../../assets/Charming_sun.png");

const propTypes = {
	// approvalsStore: PropTypes.observableObject
};

@inject("appStore")
@observer
export class MainView extends Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerRight: (
				<BeachSelection inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} />
			)
			/* the rest of this config is unchanged */
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.backgroundImage} source={remote} />
				<View style={styles.topBar}>
					<BeachSelection inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} />
				</View>
				<View style={styles.mainArea}>
					<Text>Home Page</Text>
					<ScoreScale />
					{/*<Text>SelectedBeach: {JSON.stringify(this.props.appStore.selectedBeach)}</Text>*/}
					{/*<Text>Weather: {JSON.stringify(this.props.appStore.selectedWeather)}</Text>*/}
					<Button
						onPress={() => {
							this.props.appStore.syncWeather();
						}}
						title="Sync weather"
					/>
				</View>
				<View style={styles.bottomBar}>
					<Text style={styles.bottomText}>Settings: </Text>
					<Icon.Button
						onPress={() => this.props.navigation.navigate("Settings")}
						backgroundColor="transparent"
						name={"tune"}
						color={colors.grey3}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dcd2b5",
		// marginBottom: 40,
		paddingTop: DeviceInfo.isIPhoneX_deprecated ? 40 : 20
	},
	backgroundImage: {
		flex: 1,
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		resizeMode: "stretch"
	},
	topBar: {
		flexDirection: "row-reverse"
	},
	mainArea: {
		flex: 1
		// backgroundColor: "blue"
		// top: 20
	},
	bottomBar: {
		flex: 1,
		flexDirection: "row",
		position: "absolute",
		height: 40,
		bottom: DeviceInfo.isIPhoneX_deprecated ? 10 : 0,
		left: 10,
		right: 0,
		alignItems: "center",
		justifyContent: "space-between"
	},
	bottomText: {
		color: colors.grey3
	},
	settingsButton: {
		backgroundColor: "transparent",
		alignItems: "center",
		justifyContent: "center"
	},
	beachSelection: {
		position: "absolute",
		// top: 40,
		right: 0,
		width: 100
	},
	inputContainerStyle: {
		width: 110,
		flexDirection: "row-reverse",
		justifyContent: "center",
		height: 20,
		alignItems: "center"
	},
	inputStyle: {
		textAlign: "right",
		fontSize: 14
	}
});
