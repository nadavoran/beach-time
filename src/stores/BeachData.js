import { observable, computed, action, useStrict, transaction } from "mobx";
import { persist } from "mobx-persist";

// useStrict(true);

export class BeachData {
	setAll(data) {
		this.q = data.q;
		this.name = data.name;
	}

	// @persist

	@persist
	@observable
	q;

	@persist
	@observable
	name;

	//******************
	//computed
	//******************

	// @computed

	//******************
	//actions
	//******************

	// @action
}
