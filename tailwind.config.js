/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}", // app의 하위 폴더의 모든 js,ts,jsx,tsx 파일들
    // "./pages/**/*.{js,ts,jsx,tsx}", // pages의 하위 폴더의 모든 js,ts,jsx,tsx 파일들
    // "./components/**/*.{js,ts,jsx,tsx}", // components 하위 폴더의 모든 js,ts,jsx,tsx 파일들
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}", // src하위 폴더의 모든 js,ts,jsx,tsx 파일들
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
