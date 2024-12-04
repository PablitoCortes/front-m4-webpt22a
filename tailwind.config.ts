import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Londrina Solid", "sans-serif"],
      },
      boxShadow: {
        custom: "2px 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      colors: {
        background: "#ffdab3",
        foreground: "#171717",
        primaryColor: "#d35400",
        secondaryColor: "#8e44ad",
        text: "#4a2c2a",
        details: "#e74c3c",
        complentary: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
