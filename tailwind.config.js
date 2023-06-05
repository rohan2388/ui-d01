/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#FFFFFF",
          content: "#62618F",
        },
        primary: {
          DEFAULT: "#1A194D",
          content: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#EE4D38",
          content: "#FFFFFF",
        },
        main: {
          DEFAULT: "#FFFFFF",
          content: "#62618F",
        },
      },

      fontFamily: {
        sans: ["var(--font-poppins)"],
      },

      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
