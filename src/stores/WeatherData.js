import { observable, computed, action, useStrict, transaction } from "mobx";
import { persist } from "mobx-persist";

// useStrict(true);

export class WeatherData {
	setAll(data) {
		this.time = data.time;
		this.beachTemp = data.beachTemp;
		this.beachWindSpeed = data.beachWindSpeed;
		this.beachWindBearing = data.beachWindBearing;
		this.beachCloud = data.beachCloud;
		this.score = data.score;
	}

	// @persist

	@persist
	@observable
	time;

	@persist
	@observable
	beachTemp;

	@persist
	@observable
	// beachWindSpeed: { knots: 4, mps: 2, kph: 7 },
	beachWindSpeed;

	@persist
	@observable
	beachWindBearing;

	@persist
	@observable
	beachCloud;

	@persist
	@observable
	score;
	// score: { score: 10, result: "" }

	// @persist @observable

	//******************
	//computed
	//******************

	// @computed

	//******************
	//actions
	//******************

	// @action
}
