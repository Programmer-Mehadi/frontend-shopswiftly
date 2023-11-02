import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Zircon: "#F5F7FF",
        MediumTealBlue: "#0054A5",
        BrightBlue: "#0156FF",
        Azure: "#01A4FF",
        GreyChateau: "#A2A6B0",
        GreyDarkChateau: "#ACACAC",
        GreyLightChateau: "#CACDD8",
        Black: "#000000",
        NoneBlack: "#020202",
        Reddish: "#C94D3F",
        DullGreen: "#78A962",
        IronSideGrey: "#666666",
        SelectiveYellow: "#FFB800",
        Darkblack: "#232D3F",
        DarkMiron: "#352F44",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
export default config
