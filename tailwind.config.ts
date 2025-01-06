import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefinSlab: ['var(--font-josefin-slab)'],
      },
      colors: {
        mainColor: "var(--mainColor)",
        secondColor: "var(--secondColor)",
        thirdColor: "var(--thirdColor)",
        fourthColor : "var(--fourthColor)",
        fifthColor : "var(--fifthColor)"
      },
    },
  },
  plugins: [],
} satisfies Config;
