import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          100: "#333333",
          200: "#737373",
          300: "#D9D9D9",
          400: "#FAFAFA",
          500: "#FFFFFF",
        },
        primary: {
          100: "#633CFF",
          200: "#BEADFF",
          300: "#EFEBFF",
        },
        warning: "#FF3939",
        // placeholderDark: "rgba(255, 255, 255, 0.25)",
        // placeholderLight: "rgba(0, 1, 18, 0.25)",
        // palePurpleBtn: "rgba(99, 95, 199, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
