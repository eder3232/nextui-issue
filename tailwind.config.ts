import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      // prefix: 'nextui', // prefix for themes variables
      // addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      // defaultTheme: 'dark', // default theme from the themes object
      // defaultExtendTheme: 'light', // default theme to extend on custom themes
      // layout: {}, // common layout options
      themes: {
        // light: {
        //   extends: 'light',
        //   layout: {}, // light theme layout options
        //   // ...
        //   colors: {
        //     background: '#FFFFFF', // or DEFAULT
        //     foreground: '#11181C', // or 50 to 900 DEFAULT
        //     primary: {
        //       //... 50 to 900
        //       foreground: '#FFFFFF',
        //       DEFAULT: '#006FEE',
        //     },
        //   },
        // },
        // dark: {
        //   extends: 'dark',
        //   layout: {}, // dark theme layout options
        //   // ...
        // },
        // ... custom themes
        'purple-dark': {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff',
            },
            focus: '#F182F6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
}
export default config
