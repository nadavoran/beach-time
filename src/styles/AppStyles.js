export const colors = {
	grey1: "#ebebeb",
	grey2: "#bcbcbc",
	grey3: "#ababab",
	grey4: "#888",
	white: "#FFFFFF",
	transparent: "transparent",
	black: "#000000",
	halfWhite: "#D7D7D750",
	orange: "#e86a50",
	error: "#C15564",
	success: "#37ac6b",
	defaultSvg: "#FFFFFF",
	defaultDarkSvg: "#3c3e48CD",
	liteGrey: "#EBEBEB",
	dark: "#3c3e48",
	dark80: "#3c3e48CD",
	dark70: "#3c3e48B3",
	dark60: "#3c3e489A",
	dark50: "#3c3e4880",
	dark10: "#3c3e481A",
	liteDark: "#5d5f70",
	mediumDark: "#474A5C",
	opacity80: "CD",
	opacity60: "9A",
	opacity50: "80",
	opacity20: "33",
	opacity10: "1A",
	opacity: percent => {
		if (typeof percent === "string") {
			percent = parseInt(percent);
		}
		if (percent === 0) {
			return "00";
		}
		let hexOpacity = "";
		if (percent < 1) {
			hexOpacity = Math.round(255 * percent).toString(16);
		} else {
			hexOpacity = Math.round((255 * percent) / 100).toString(16);
		}
		if (hexOpacity.length === 1) {
			hexOpacity = "0" + hexOpacity;
		}
		return hexOpacity;
	}
};

export const textColors = {
	default: colors.dark,
	default80: colors.dark + colors.opacity80,
	default60: colors.dark + colors.opacity60,
	default50: colors.dark + colors.opacity50,
	hintColor: colors.dark + colors.opacity50,
	onDark: colors.white,
	onDark80: colors.white + colors.opacity80,
	onDark60: colors.white + colors.opacity60,
	onDark50: colors.white + colors.opacity50,
	hintColorOnDark: colors.white + colors.opacity50
};
