import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import { Provider, observer, Observer } from "mobx-react/native";
import AppNavigator from "./src/navigators/AppNavigator";
import appStore from "./src/stores/AppStore";
import { create } from "mobx-persist";

export default class App extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const hydrate = create({ storage: AsyncStorage });
		// hydrate("appStore", appStore).then(() => {});
		appStore.init();
	}
	render() {
		return (
			<Provider
				appStore={appStore}
				// loginStore={loginStore}
				// systemLoginStore={systemLoginStore}
				// uiConfigStore={uiConfigStore}
				// systemStore={systemStore}
				// attachmentsStore={attachmentsStore}
				// systemLogStore={systemLogStore}
			>
				<AppNavigator />
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
