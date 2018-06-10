import { observable, computed, action, configure, transaction } from "mobx";
import { persist } from "mobx-persist";
import { WeatherData } from "./WeatherData";
import { weatherDataApi } from "../apis/WeatherDataApi";
import { BeachData } from "./BeachData";
import { BeachWeather } from "./BeachWeather";

configure({ enforceActions: true });

class AppStore {
	// @persist

	@persist("map", WeatherData)
	@observable
	weatherData = new Map();

	@persist
	@observable
	selectedBeachIndex;

	@persist("list")
	@observable
	optionalBeaches = [];

	@persist
	@observable
	useMock;

	// @persist @observable

	//******************
	//computed
	//******************

	@computed
	get selectedBeach() {
		return this.optionalBeaches[this.selectedBeachIndex];
	}

	@computed
	get selectedWeather() {
		if (this.selectedBeach) {
			return this.weatherData.get(this.selectedBeach.q);
		}
		return [];
	}

	// @computed

	//******************
	//actions
	//******************

	@action
	init = async () => {
		await this.syncBeach();
		appStore.selectBeach(0);
		// this.syncWeather();
	};

	@action
	syncBeach = async () => {
		return await weatherDataApi.getBeach(this.useMock).then(this.updatedBeaches);
	};

	@action
	updatedBeaches = async beaches => {
		if (!beaches || !beaches.length) return;
		beaches.forEach(beachData => {
			let beach = this.optionalBeaches.find(tempBeach => {
				return tempBeach.q === beachData.q;
			});
			if (!beach) {
				beach = new BeachData();
				this.optionalBeaches.push(beach);
			}
			beach.setAll(beachData);
		});
	};

	@action
	syncWeather = async () => {
		let parameters = {
			q: this.selectedBeach.q,
			name: this.selectedBeach.name,
			hour: new Date().getHours()
		};
		weatherDataApi.getWeather(parameters, this.useMock).then(this.updatedWeather);
	};

	@action
	updatedWeather = async weather => {
		if (!weather) return;
		let updateBeachWeather;
		if (this.weatherData.has(weather.location)) {
			// found weather lets update
			updateBeachWeather = this.weatherData.get(weather.location);
		} else {
			updateBeachWeather = new BeachWeather();
			this.weatherData.set(weather.location, updateBeachWeather);
		}
		updateBeachWeather.setAll(weather);
	};

	@action
	selectBeach = index => {
		if (typeof index === "number") {
			if (index > -1 && index < this.optionalBeaches.length) {
				this.selectedBeachIndex = index;
				this.syncWeather();
			}
		} else if (typeof index === "string") {
			let tempIndex = this.optionalBeaches.findIndex(beach => {
				return beach.q === index;
			});
			if (tempIndex > -1) {
				this.selectedBeachIndex = tempIndex;
				this.syncWeather();
			}
		}
	};
}

const appStore = new AppStore();
export default appStore;
export { AppStore };
