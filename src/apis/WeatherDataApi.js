const WEATHER_URL = "https://salty-waters-82263.herokuapp.com";

class WeatherDataApi {
	async getBeach(useMock) {
		console.log(`getBeach started`);
		if (useMock) {
			return Promise.resolve([
				{ q: "32.146284,34.791701", name: "חוף הצוק" },
				{ q: "32.644664,34.924499", name: "חוף הבונים" },
				{ q: "32.0800225,34.7656883", name: "חוף פרישמן" },
				{ q: "31.926583,34.696981", name: "חוף פלמחים" },
				{ q: "32.488990,34.888919", name: "שדות ים" }
			]);
		}
		let request = this.createRequest(`${WEATHER_URL}/beachlist`, "GET");
		// return await this.sendRequest(request);
		let res = await fetch(request);
		return await res.json();
	}
	async getWeather(json, useMock) {
		console.log(`getWeather started`);
		//
		if (true) {
			return Promise.resolve({
				hourly: {
					data: [
						{
							time: 1528614000,
							beachTemp: 29,
							beachWindSpeed: { knots: 9, mps: 4.73, kph: 17 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1528617600,
							beachTemp: 30,
							beachWindSpeed: { knots: 10, mps: 5.02, kph: 18 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528621200,
							beachTemp: 31,
							beachWindSpeed: { knots: 11, mps: 5.43, kph: 20 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528624800,
							beachTemp: 31,
							beachWindSpeed: { knots: 11, mps: 5.51, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528628400,
							beachTemp: 31,
							beachWindSpeed: { knots: 10, mps: 5.24, kph: 19 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528632000,
							beachTemp: 31,
							beachWindSpeed: { knots: 10, mps: 4.93, kph: 18 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528635600,
							beachTemp: 31,
							beachWindSpeed: { knots: 8, mps: 4.17, kph: 15 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528639200,
							beachTemp: 30,
							beachWindSpeed: { knots: 7, mps: 3.61, kph: 13 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528642800,
							beachTemp: 30,
							beachWindSpeed: { knots: 7, mps: 3.42, kph: 12 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528700400,
							beachTemp: 28,
							beachWindSpeed: { knots: 10, mps: 5.23, kph: 19 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 28,
							score: { score: 8, result: "" }
						},
						{
							time: 1528704000,
							beachTemp: 28,
							beachWindSpeed: { knots: 11, mps: 5.49, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 30,
							score: { score: 8, result: "" }
						},
						{
							time: 1528707600,
							beachTemp: 29,
							beachWindSpeed: { knots: 11, mps: 5.59, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 4,
							score: { score: 9, result: "" }
						},
						{
							time: 1528711200,
							beachTemp: 29,
							beachWindSpeed: { knots: 11, mps: 5.55, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 26,
							score: { score: 9, result: "" }
						},
						{
							time: 1528714800,
							beachTemp: 30,
							beachWindSpeed: { knots: 11, mps: 5.49, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 29,
							score: { score: 10, result: "" }
						},
						{
							time: 1528718400,
							beachTemp: 30,
							beachWindSpeed: { knots: 11, mps: 5.57, kph: 20 },
							beachWindBearing: "מערבית",
							beachCloud: 29,
							score: { score: 10, result: "" }
						},
						{
							time: 1528722000,
							beachTemp: 29,
							beachWindSpeed: { knots: 10, mps: 5.14, kph: 19 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 23,
							score: { score: 9, result: "" }
						},
						{
							time: 1528725600,
							beachTemp: 28,
							beachWindSpeed: { knots: 9, mps: 4.73, kph: 17 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 19,
							score: { score: 8, result: "" }
						},
						{
							time: 1528729200,
							beachTemp: 28,
							beachWindSpeed: { knots: 8, mps: 4.17, kph: 15 },
							beachWindBearing: "מערבית",
							beachCloud: 13,
							score: { score: 8, result: "" }
						},
						{
							time: 1528786800,
							beachTemp: 26,
							beachWindSpeed: { knots: 8, mps: 4.14, kph: 15 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 57,
							score: { score: 6, result: "" }
						},
						{
							time: 1528790400,
							beachTemp: 26,
							beachWindSpeed: { knots: 8, mps: 4.32, kph: 16 },
							beachWindBearing: "מערבית",
							beachCloud: 54,
							score: { score: 6, result: "" }
						},
						{
							time: 1528794000,
							beachTemp: 26,
							beachWindSpeed: { knots: 9, mps: 4.51, kph: 16 },
							beachWindBearing: "מערבית",
							beachCloud: 45,
							score: { score: 6, result: "" }
						},
						{
							time: 1528797600,
							beachTemp: 27,
							beachWindSpeed: { knots: 9, mps: 4.46, kph: 16 },
							beachWindBearing: "מערבית",
							beachCloud: 39,
							score: { score: 7, result: "" }
						},
						{
							time: 1528801200,
							beachTemp: 28,
							beachWindSpeed: { knots: 9, mps: 4.58, kph: 16 },
							beachWindBearing: "מערבית",
							beachCloud: 28,
							score: { score: 8, result: "" }
						},
						{
							time: 1528804800,
							beachTemp: 28,
							beachWindSpeed: { knots: 9, mps: 4.85, kph: 17 },
							beachWindBearing: "מערבית",
							beachCloud: 31,
							score: { score: 8, result: "" }
						},
						{
							time: 1528808400,
							beachTemp: 28,
							beachWindSpeed: { knots: 8, mps: 4.24, kph: 15 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 33,
							score: { score: 8, result: "" }
						},
						{
							time: 1528812000,
							beachTemp: 28,
							beachWindSpeed: { knots: 7, mps: 3.81, kph: 14 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 33,
							score: { score: 8, result: "" }
						},
						{
							time: 1528815600,
							beachTemp: 27,
							beachWindSpeed: { knots: 7, mps: 3.67, kph: 13 },
							beachWindBearing: "מערבית",
							beachCloud: 25,
							score: { score: 7, result: "" }
						},
						{
							time: 1528873200,
							beachTemp: 26,
							beachWindSpeed: { knots: 7, mps: 3.39, kph: 12 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 2,
							score: { score: 6, result: "" }
						},
						{
							time: 1528876800,
							beachTemp: 26,
							beachWindSpeed: { knots: 7, mps: 3.77, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 1,
							score: { score: 6, result: "" }
						},
						{
							time: 1528880400,
							beachTemp: 27,
							beachWindSpeed: { knots: 8, mps: 4.1, kph: 15 },
							beachWindBearing: "מערבית",
							beachCloud: 1,
							score: { score: 7, result: "" }
						},
						{
							time: 1528884000,
							beachTemp: 28,
							beachWindSpeed: { knots: 9, mps: 4.4, kph: 16 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 2,
							score: { score: 8, result: "" }
						},
						{
							time: 1528887600,
							beachTemp: 29,
							beachWindSpeed: { knots: 9, mps: 4.62, kph: 17 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 2,
							score: { score: 9, result: "" }
						},
						{
							time: 1528891200,
							beachTemp: 29,
							beachWindSpeed: { knots: 9, mps: 4.72, kph: 17 },
							beachWindBearing: "מערבית",
							beachCloud: 2,
							score: { score: 9, result: "" }
						},
						{
							time: 1528894800,
							beachTemp: 29,
							beachWindSpeed: { knots: 8, mps: 4.3, kph: 15 },
							beachWindBearing: "דרום מערבית",
							beachCloud: 1,
							score: { score: 9, result: "" }
						},
						{
							time: 1528898400,
							beachTemp: 29,
							beachWindSpeed: { knots: 8, mps: 3.93, kph: 14 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 1,
							score: { score: 9, result: "" }
						},
						{
							time: 1528902000,
							beachTemp: 28,
							beachWindSpeed: { knots: 7, mps: 3.63, kph: 13 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 8, result: "" }
						},
						{
							time: 1528959600,
							beachTemp: 28,
							beachWindSpeed: { knots: 4, mps: 2.14, kph: 8 },
							beachWindBearing: "דרום מזרחית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528963200,
							beachTemp: 28,
							beachWindSpeed: { knots: 6, mps: 2.85, kph: 10 },
							beachWindBearing: "צפונית",
							beachCloud: 0,
							score: { score: 8, result: "" }
						},
						{
							time: 1528966800,
							beachTemp: 29,
							beachWindSpeed: { knots: 7, mps: 3.5, kph: 13 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1528970400,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4.13, kph: 15 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528974000,
							beachTemp: 30,
							beachWindSpeed: { knots: 9, mps: 4.69, kph: 17 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528977600,
							beachTemp: 30,
							beachWindSpeed: { knots: 10, mps: 5.03, kph: 18 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528981200,
							beachTemp: 30,
							beachWindSpeed: { knots: 10, mps: 5.04, kph: 18 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528984800,
							beachTemp: 29,
							beachWindSpeed: { knots: 9, mps: 4.8, kph: 17 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1528988400,
							beachTemp: 29,
							beachWindSpeed: { knots: 9, mps: 4.45, kph: 16 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1529046000,
							beachTemp: 28,
							beachWindSpeed: { knots: 4, mps: 1.93, kph: 7 },
							beachWindBearing: "דרומית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529049600,
							beachTemp: 29,
							beachWindSpeed: { knots: 6, mps: 3, kph: 11 },
							beachWindBearing: "צפונית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1529053200,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4.1, kph: 15 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529056800,
							beachTemp: 30,
							beachWindSpeed: { knots: 9, mps: 4.51, kph: 16 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529060400,
							beachTemp: 31,
							beachWindSpeed: { knots: 9, mps: 4.74, kph: 17 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529064000,
							beachTemp: 30,
							beachWindSpeed: { knots: 9, mps: 4.78, kph: 17 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529067600,
							beachTemp: 30,
							beachWindSpeed: { knots: 9, mps: 4.51, kph: 16 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529071200,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4.03, kph: 15 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529074800,
							beachTemp: 29,
							beachWindSpeed: { knots: 7, mps: 3.51, kph: 13 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1529132400,
							beachTemp: 29,
							beachWindSpeed: { knots: 4, mps: 2.1, kph: 8 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529136000,
							beachTemp: 30,
							beachWindSpeed: { knots: 5, mps: 2.81, kph: 10 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529139600,
							beachTemp: 30,
							beachWindSpeed: { knots: 7, mps: 3.54, kph: 13 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529143200,
							beachTemp: 31,
							beachWindSpeed: { knots: 9, mps: 4.41, kph: 16 },
							beachWindBearing: "דרומית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529146800,
							beachTemp: 31,
							beachWindSpeed: { knots: 10, mps: 5.37, kph: 19 },
							beachWindBearing: "צפונית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529150400,
							beachTemp: 31,
							beachWindSpeed: { knots: 11, mps: 5.91, kph: 21 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529154000,
							beachTemp: 31,
							beachWindSpeed: { knots: 10, mps: 5.33, kph: 19 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529157600,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4.16, kph: 15 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529161200,
							beachTemp: 30,
							beachWindSpeed: { knots: 6, mps: 3.06, kph: 11 },
							beachWindBearing: "צפון מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						}
					]
				},
				daily: {
					data: [
						{
							time: 1528578000,
							beachTemp: 30,
							beachWindSpeed: { knots: 10, mps: 5, kph: 18 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1528664400,
							beachTemp: 29,
							beachWindSpeed: { knots: 10, mps: 5, kph: 18 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1528750800,
							beachTemp: 27,
							beachWindSpeed: { knots: 8, mps: 4, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 7, result: "" }
						},
						{
							time: 1528837200,
							beachTemp: 28,
							beachWindSpeed: { knots: 8, mps: 4, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 8, result: "" }
						},
						{
							time: 1528923600,
							beachTemp: 29,
							beachWindSpeed: { knots: 8, mps: 4, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 9, result: "" }
						},
						{
							time: 1529010000,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						},
						{
							time: 1529096400,
							beachTemp: 30,
							beachWindSpeed: { knots: 8, mps: 4, kph: 14 },
							beachWindBearing: "מערבית",
							beachCloud: 0,
							score: { score: 10, result: "" }
						}
					]
				},
				currently: {
					time: 1528570088,
					beachTemp: 25,
					beachWindSpeed: { knots: 4, mps: 2.13, kph: 8 },
					beachWindBearing: "מערבית",
					beachCloud: 0,
					score: { score: 7, result: "" }
				},
				location: "32.146284,34.791701",
				longitude: 34.791701,
				latitude: 32.146284
			});
		}
		let request = this.createRequest(`${WEATHER_URL}/weather`, "GET", null, json);
		let res = await fetch(request);
		return await res.json();
		// return await this.sendRequest(request);
	}

	createRequest(url, method, body, params) {
		if (params && Object.keys(params).length > 0) {
			Object.keys(params).forEach((key, index) => {
				if (index === 0) {
					url = url + "?";
				} else {
					url = url + "&";
				}
				let keyValue = key + "=" + encodeURIComponent(params[key]);
				if (Array.isArray(params[key])) {
					keyValue = key + "=" + encodeURIComponent(JSON.stringify(params[key]));
				}
				url = url + keyValue;
			});
		}
		return new Request(url, {
			method,
			headers: {
				// Authorization: `Bearer ${loginStore.user.token}`,
				"Content-Type": "application/json"
			},
			body: body && JSON.stringify(body)
		});
	}

	async sendRequest(request, extraDataToResponse, timeoutVal) {
		return new Promise((resolve, reject) => {
			let didTimeOut = false;
			let timeout;
			if (timeoutVal) {
				timeout = setTimeout(function() {
					didTimeOut = true;
					return reject({
						status: "",
						statusText: `Request timed out`
					});
				}, timeoutVal);
			}

			fetch(request)
				.then(async resp => {
					timeout && clearTimeout(timeout);
					if (didTimeOut) {
						//already timed out
						return;
					}
					if (resp.ok) {
						let contentType = resp.headers.get("content-type");
						if (contentType.includes("application/json")) {
							let respJson = await resp.json();
							if (extraDataToResponse) {
								respJson.extraData = extraDataToResponse;
							}
							return resolve(respJson);
						}
					} else {
						const respText = JSON.stringify(resp);
						console.error(respText);
						// console.log(respText);
						// apiUtils.handleError({ message: respText, status: resp.status });
						return reject({
							status: resp.status,
							statusText: `failed sending request: ${respText}`
						});
					}
				})
				.catch(err => {
					reject(err);
				});
		});
	}
}

let weatherDataApi = new WeatherDataApi();
export { weatherDataApi };
