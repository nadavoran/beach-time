import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { observer, inject, PropTypes } from "mobx-react/native";
import { BeachSelection } from "../components";
import { textColors } from "../styles/AppStyles";

const propTypes = {
	// approvalsStore: PropTypes.observableObject
};

@inject("appStore")
@observer
export class Settings extends Component {
	render() {
		const { appStore } = this.props;
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ fontSize: 30 }}>This is a modal!</Text>
				<BeachSelection />
				<Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {}
});
