import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { observer, inject, PropTypes } from "mobx-react/native";
import { textColors } from "../styles/AppStyles";
import { AutoComplete } from "./index";

const propTypes = {
	// approvalsStore: PropTypes.observableObject
};

@inject("appStore")
@observer
export class BeachSelection extends Component {
	onSelected = selected => {
		if (!selected) return;
		this.props.appStore.selectBeach(selected.q);
	};
	onFilter = (data, items) => {
		const { appStore } = this.props;
		const name = appStore.selectedBeach.name;
		const splitName = name.replace(/\"|\"/g, "").split(" ");
		return items && items.length
			? items.filter(item => {
					let nameRegex = new RegExp(data.replace(/\./g, "\\."), "gi");
					return nameRegex.test(`${item.name} ${item.q} ${splitName[1]}`) || nameRegex.test(splitName[1]);
			  })
			: [];
	};

	renderSearchedItem = (text, search, normalTextStyle, boldPartStyle) => {
		if (!text) return null;
		const startMatch = text.toLowerCase().indexOf(search.toLowerCase());
		if (startMatch < 0 || !search) {
			return <Text style={normalTextStyle}>{text}</Text>;
		}
		const firstPart = text.substring(0, startMatch);
		const boldPart = text.substring(startMatch, startMatch + search.length);
		const lastPart = text.substring(startMatch + search.length);
		return (
			<Text style={normalTextStyle}>
				{firstPart}
				<Text
					style={[
						{
							fontWeight: "900"
						},
						boldPartStyle
					]}
				>
					{boldPart}
				</Text>
				{lastPart}
			</Text>
		);
	};

	renderItem = ({ item, index, searchData }) => {
		let normalName = `${item.name}`;
		let lowerSearch = searchData.toLowerCase();
		let startIndex = normalName.toLowerCase().indexOf(lowerSearch);
		let foundQ = lowerSearch && item.q && startIndex === -1 && item.q.toLowerCase().indexOf(lowerSearch) > -1;
		// debugger;
		return (
			<View pointerEvents={"none"}>
				{this.renderSearchedItem(normalName, lowerSearch, { color: textColors.onDark, fontSize: 16 })}
				{foundQ ? (
					!lowerSearch || startIndex > -1 ? (
						<Text style={{ fontSize: 13, color: textColors.onDark80 }}>{item.q}</Text>
					) : (
						this.renderSearchedItem(item.q, lowerSearch, {
							color: textColors.onDark80,
							fontSize: 13
						})
					)
				) : null}
			</View>
		);
	};
	render() {
		const { appStore, inputContainerStyle, inputStyle } = this.props;
		return (
			<View>
				<AutoComplete
					placeHolder={"Select beach"}
					placeHolderStyle={styles.placeHolderStyle}
					selectedText={appStore.selectedBeach ? appStore.selectedBeach.name : null}
					filter={this.onFilter}
					onSelect={this.onSelected}
					inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
					inputStyle={[styles.userTextStyle, inputStyle]}
					renderItem={this.renderItem}
					// showModal={this.props.systemStore.showFullPage === "userAutoComplete"}
					// onShowModal={show => {
					// 	this.props.systemStore.setShowFullPage(show ? "userAutoComplete" : false);
					// }}
					originalData={appStore.optionalBeaches}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	placeHolderStyle: {},
	inputContainer: {},
	userTextStyle: {}
});
