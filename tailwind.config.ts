import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      info: "#66bb33",
      secondary: colors.gray["400"],
      "secondary-light": colors.gray["300"],
    },
  },
  plugins: [],
} satisfies import("tailwindcss/types").Config;
