import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E11D48", // Using the vibrant red from the logo
        secondary: "#0EA5E9", // Using the blue from the design
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
