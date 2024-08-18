/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./<custom directory>/**/*.{js,jsx,ts,tsx}",
		"/app/index.tsx",
	],
	theme: {
		colors: {
			primary: "#FEBD2F",
			secondary: "#151940",
			tertiary: "#314BCE",
			placeholder: "#696974",
			dark: "#000",
		},
	},
	plugins: [],
};
