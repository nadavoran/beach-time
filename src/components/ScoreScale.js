import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { observer, inject, PropTypes } from "mobx-react/native";

const propTypes = {
	// approvalsStore: PropTypes.observableObject
};

@inject("appStore")
@observer
export class ScoreScale extends Component {
	renderItem = ({ item, index }) => {
		let score = item.score.score;
		// let score = Math.round(Math.random() * 10);
		let r = (191 * (10 - score)) / 10;
		let g = (191 * score) / 10;
		const backgroundColor = `rgb(${r},${g},0)`;
		return (
			<View style={[styles.scoreContainer]}>
				<View style={[styles.bar, { justifyContent: "flex-end" }]}>
					{score > 4 ? <View style={{ backgroundColor, height: 40 - 4 * (10 - score) }} /> : null}
				</View>
				<View style={[styles.bar]}>
					{score < 5 ? <View style={{ backgroundColor, height: 40 - 4 * score }} /> : null}
				</View>
				<Text>{score}</Text>
			</View>
		);
	};

	keyExtractor = (item, index) => {
		return `day-${item.time}`;
	};

	render() {
		const { appStore } = this.props;
		if (!appStore.selectedBeach || !appStore.selectedBeach.q) return null;
		const weatherData = appStore.weatherData.get(appStore.selectedBeach.q);
		if (!weatherData || !weatherData.hourly) return null;
		// debugger;
		return (
			<FlatList
				horizontal
				keyExtractor={this.keyExtractor}
				data={weatherData.hourly}
				renderItem={this.renderItem}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	scoreContainer: {
		width: 20,
		height: 80,
		paddingHorizontal: 2
	},
	bar: {
		height: 40,
		backgroundColor: "transparent"
	}
});
