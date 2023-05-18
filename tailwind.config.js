/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
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
				subtitle: '#6c757d',
				githubButton: '#505050',
				blogButton: '#45DCB0',
				visitButton: '#82CDFF',
				hoveredGithubButton: '#1D1D1F',
				hoveredBlogButton: '#22C394',
				hoveredVisitButton: '#50A1FF',
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
