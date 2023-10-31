/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightGreen: "rgba(234, 246, 241, 1)",
				darkGreen: "rgba(0, 67, 39, 1)",
				mainYellow: "rgba(215, 121, 17, 1)",
				dimWhite: "rgba(232, 245, 246, 1)",
				lightWhite: "rgba(0, 0, 0, 0.15)",
				black: "rgba(0, 0, 0, 1)",
			},
		},
	},
	plugins: [],
};
