/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(48px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        dots: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out forwards",
        "gradient-x": "gradient-x 15s ease infinite",
        dots: "dots 0.6s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
