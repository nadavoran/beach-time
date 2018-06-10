import { observable, computed, action, useStrict, transaction } from "mobx";
import { persist } from "mobx-persist";
import { WeatherData } from "./WeatherData";

// useStrict(true);

export class BeachWeather {
	setAll(data) {
		if (data.hourly && data.hourly.data) {
			this.updateArray(this.hourly, data.hourly.data);
		}
		if (data.hourly && data.daily.data) {
			this.updateArray(this.daily, data.daily.data);
		}
		// this.hourly = data.hourly;
		// this.daily = data.daily;
		this.currently = data.currently;
		this.location = data.location;
		this.longitude = data.longitude;
		this.latitude = data.latitude;
	}

	// @persist

	@persist("list")
	@observable
	hourly = [];
	@persist
	@observable
	daily = [];
	@persist
	@observable
	currently;
	@persist
	@observable
	location;
	@persist
	@observable
	longitude;
	@persist
	@observable
	latitude;

	//******************
	//computed
	//******************

	// @computed

	//******************
	//actions
	//******************

	@action
	updateArray = (element, items) => {
		if (!items || !items.length) return;
		items.forEach(item => {
			let foundData = element.find(elem => {
				return elem.time === item.time;
			});
			if (!foundData) {
				foundData = new WeatherData();
				element.push(foundData);
			}
			foundData.setAll(item);
		});
	};

	// @action
}
