import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#31cba0",
        darkBg: "#024d4d",
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(90.21deg, rgba(0, 20, 91, 0.5) -50.91%, rgba(0, 180, 90, 0.5) 150.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
