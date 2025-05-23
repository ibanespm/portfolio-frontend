import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],

      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
