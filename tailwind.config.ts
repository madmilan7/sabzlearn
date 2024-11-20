import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "13": "3.25rem",
        "5.5": "1.375rem",
        "25": "6.25rem"
      },
      width: {
        "13": "3.25rem",
        "5.5": "1.375rem",
      },
      padding: {
        "4.5": "1.125rem",
      },
      colors: {
        "darker": "#242a38",
        "dark": "#333c4c"
      }
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
