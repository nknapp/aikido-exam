import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {},
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
      primary: "#55aa77",
      "primary-light": "#ddeee4",
      "primary-dark": "#227755",
      "info-light": colors.amber["100"],
      info: colors.amber["300"],
      "info-dark": colors.amber["900"],
      secondary: colors.gray["400"],
      "secondary-light": colors.gray["300"],
      "secondary-dark": colors.gray["700"],
    },
  },
  plugins: [],
} satisfies import("tailwindcss/types").Config;
