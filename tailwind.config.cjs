/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { //se pondria la etiqueta que usa tailwind-default
				secondary: {
					100: '#E2E2D5',
					200: '#888883',
				},
				palette: {
					one: '#830A1E',
					two: '#DE2647',
					three: '#F3593B',
					four: '#F19B3E',
					five: '#F3BD62',
				},
				palette2: {
					one: '#F0EFE9',
					two: '#F19381',
					three: '#F1B9A7',
					four: '#60AA9C',
					five: '#77C7DE',
					six: '#B38FB0',
					text: '#5B5E67'
				},
				social: {
					Facebook: '#3b5998',
					YouTube: '#bb0000',
					Twitter: '#55acee',
					Linkedin: '#007bb5',
					Instagram: '#E1306C',
					WhatsApp: '#4dc247',
					mailchimpBg: '#FFE01B'
				}

			},
			fontFamily: {
				textPrimary: ['Sahitya'],
				textSecondary: ['Ubuntu']
			},
			fontSize: {
				h1: ['12.5rem']
			},
			backgroundImage: {
				'hero-home': "url('https://i.giphy.com/media/XEb90OzfzTduM/giphy.webp')",
				'orange': "url(https://i.giphy.com/media/k7K48NJ7qlko8/giphy.webp)",
				'home2section': "url(/bg2sec.jpg)",
				'newssection': "url(/bgnews.jpg)",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			opacity: ['active'],
		},
	},
	plugins: [],
}
