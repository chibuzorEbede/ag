/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      boxShadow: {
        "3xl": "0px 0px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero_banner.svg')",
        "hero-pattern2": "url('/img/ai.png')",
        "hero-pattern3": "url('/img/hero.png')",
      },
      colors: {
        "ag-green": "#006400",
        "ag-gold": "#DFC47D",
        "ag-black-100": "#615D5D",
      },
    },
  },
  plugins: [],
};
