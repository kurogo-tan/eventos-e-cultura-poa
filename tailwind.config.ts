import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { purple: "#7C3AED", coral: "#F97373", amber: "#F59E0B", cream: "#FAF7F2", ink: "#1F2937" },
      fontFamily: { sans: ["var(--font-plus-jakarta)", "Arial", "sans-serif"], display: ["var(--font-space-grotesk)", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
