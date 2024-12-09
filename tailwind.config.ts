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
       violet: "#9333ea",
       violetclair: "#8559c5",

      },
      fontFamily: {
        poppins:['Poppins','sans-serif'],
        anttic:['Antic','sans-serif'],
        inter: ['Inter','sans-serif'],
        MerriweatherSans: ['MerriweatherSans','sans-serif'],
        WorkSans: ['WorkSans','sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
