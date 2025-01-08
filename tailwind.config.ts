import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
	fontFamily: {
		primary: "var(--font-ysabeau)",
	},
    extend: {
      colors: {
       primary: '#1c1c22',
	   accent: {
		DEFAULT: "#00ff99",
		hover: "#00e187",
	   },
      },
	  keyframes: {

	  },
	  animation: {

	  },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
