import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'primaryBlack': '#151415',
        'primaryWhite': '#eeede9',
        'secundaryWhite': '#f1e9e9',
        'rose': '#b48d8c'
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        destaque: 'Abhaya_Libre',
        tenor: 'Tenor_Sans',
        mont: 'Montserrat'
      },
    },
  },
  plugins: [],
} satisfies Config

export default config