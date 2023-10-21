import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
export default config;
