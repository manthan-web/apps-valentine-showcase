/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#1a0a12",           /* Deep romantic burgundy-black */
				secondary: "#FF6B8A",         /* Vibrant coral-pink for buttons */
				tertiary: "#FF4D6D",          /* Rich rose for No button */
				"primary-mono": "#FF9EB5",    /* Soft pink for text & accents */
				"secondary-mono": "#FF85A1",  /* Deeper pink for hover states */
				"tertiary-mono": "#FFB6C7",   /* Light pink for hover */
			},
			fontFamily: {
				primary: ["Great Vibes", "cursive"],
				secondary: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
