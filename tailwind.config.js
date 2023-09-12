/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./App.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			primary: "#5771F9",
			secondary: "#151940",
			tertiary: "#314BCE",
			placeholder: "#F5F6FA",
		},
	},
	plugins: [],
};
