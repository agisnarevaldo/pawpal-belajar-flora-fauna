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
        'home': "url('/bg/bgHome.png')",
        'main-menu': "url('/bg/bgMainMenu.png')",
        'flora-menu': "url('/bg/bgFloraMenu.png')",
        'fauna-menu': "url('/bg/bgFaunaMenu.png')",
        'bernyanyi': "url('/bg/bgBernyanyi.png')",
        'jungle': "url('/bg/jungle.png')",
      },
    },
  },
  plugins: [],
};
export default config;
