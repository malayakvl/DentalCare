import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        social: {
          facebook: '#6466e3',
          twitter: '#00ACEE'
        },
        gray: {
          25: '#d0cfd3',
          100: '#f5f5f5',
          150: '#d0cfd3',
          180: '#d0cfd3',
          350: '#605681',
          450: '#2f264b',
        },
        blue: {
          250: '#8163bd',
          350: '#2b2762',
        },
        green: {
          250: '#3cc733',
          350: '#127e0f',
        },
        violet: {
          650: '#2b2762',
          550: '#433796',
          450: '#4c2b8f',
          350: '#8163bd',
          250: '#ae90f2',
          150: '#f1effe',
        },
        orange: {
          450: '#EE5342'
        },
      }
    },
  },
  plugins: [],
};
export default config;
