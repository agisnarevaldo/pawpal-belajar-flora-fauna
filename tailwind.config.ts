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
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#613789",
        light: "#D9D9D9",
      },
      backgroundImage: {
        'home': "url('/bgHome.png')",
        'main-menu': "url('/bgMainMenu.png')",
        'flora-menu': "url('/bgFloraMenu.png')",
        'fauna-menu': "url('/bgFaunaMenu.png')",
        'bernyanyi': "url('/bgBernyanyi.png')",
        'jungle': "url('/jungle.png')",
      },
    },
  },
  plugins: [],
};
export default config;
