/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// "./app/**/*.{js,ts,jsx,tsx}", // app의 하위 폴더의 모든 js,ts,jsx,tsx 파일들
		// "./pages/**/*.{js,ts,jsx,tsx}", // pages의 하위 폴더의 모든 js,ts,jsx,tsx 파일들
		// "./components/**/*.{js,ts,jsx,tsx}", // components 하위 폴더의 모든 js,ts,jsx,tsx 파일들
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}', // src하위 폴더의 모든 js,ts,jsx,tsx 파일들
	],
	theme: {
		extend: {
			width: {
				nav: '254px',
				desktopHeader: '953px',
			},
			colors: {
				nav: '#6F6E73',
				oddBg: '#F5F4F7',
				evenBg: '#D9D9D9',
				subtitle: '#6F6E73',
			},
			dropShadow: {
				cardShadow: '1px 1px 10px rgba(0, 0, 0, 0.25)',
				headingShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
			},
		},
		container: {
			center: true,
		},
		screens: {
			mobile: { max: '768px' },
			tablet: { min: '769px', max: '1023px' },
			dsektop: '1024px',
		},
	},
	plugins: [],
}
