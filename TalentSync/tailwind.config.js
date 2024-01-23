/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray50: "#F9FAFB",
        gray100: "#F2F4F7",
        gray300: '#D0D5DD',
        gray400: '#98A2B3',
        gray500: '#667085',
        gray600: '#475467',
        gray700: '#344054',
        gray800: '#1D2939',
        gray900: "#101828",
        blue50: "#EFF8FF",
        blue100: "#D1E9FF",
        blue200: "#B2DDFF",
        blue700: "#175CD3",
        blueDark400: "#528BFF",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

