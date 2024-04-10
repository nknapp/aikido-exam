import colors from "tailwindcss/colors";
import Color from "color";

const primaryColor = "#b6cbaa";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      screens: {
        mouse: { raw: "(hover: hover)" },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
        "2xl": "15rem",
      },
    },
    colors: {
      "primary-lightest": new Color(primaryColor).lighten(0.2).hex(),
      "primary-light": new Color(primaryColor).lighten(0.0).hex(),
      primary: new Color(primaryColor).darken(0.3).hex(),
      "primary-dark": new Color(primaryColor).darken(0.5).hex(),
      "primary-darkest": new Color(primaryColor).darken(0.7).hex(),
      "info-lightest": colors.amber["100"],
      "info-light": colors.amber["200"],
      info: colors.yellow["400"],
      "info-dark": colors.yellow["700"],
      "info-darkest": colors.yellow["900"],
      "secondary-lightest": colors.gray["200"],
      "secondary-light": colors.gray["300"],
      secondary: colors.gray["500"],
      "secondary-dark": colors.gray["700"],
      "secondary-darkest": colors.gray["900"],
      white: "#fff",
      black: "#000",
      current: "currentColor",
    },
  },
  plugins: [],
} satisfies import("tailwindcss/types").Config;
