/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",       
        secondary: "#8b5cf6",     
        tertiary: "#10b981",      
        neutral: "#1f2937",       
        alternate: "#fbbf24",     
        card: "#1e293b",          
        surface: "#0f172a",       
        "text-main": "#f8fafc",   
        "text-subtle": "#94a3b8"  
      }
    }
  },
  plugins: [],
}
