/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./App.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			primary: "#FEBD2F",
			secondary: "#151940",
			tertiary: "#314BCE",
			placeholder: "#696974",
		},
	},
	plugins: [],
};
