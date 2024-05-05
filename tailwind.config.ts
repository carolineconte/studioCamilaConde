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
        'rose': '#b48d8c',
        'grad':'linear-gradient(196deg, rgba(154, 102, 98, 1) 0%, rgba(244, 194, 188, 1) 28%, rgb(198, 151, 147) 58%, rgba(211, 162, 156, 1) 79%);',
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