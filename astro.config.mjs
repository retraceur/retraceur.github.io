// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Retraceur',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'fr': {
					label: 'Français',
					lang: 'fr',
				},
			},
			customCss: [
				'./src/styles/retraceur.css',
			],
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
			},
			social: {
				github: 'https://github.com/retraceur',
			},
			sidebar: [
				{
					label: 'About',
					translations: {
						'fr': 'À propos',
					},
					link: '/about/',
				},
				{
					label: 'Getting started',
					translations: {
						'fr': 'Premiers pas',
					},
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'API',
					translations: {
						'fr': 'API',
					},
					items: [
						'api/rest'
					],
				},
				{
					label: 'Rules',
					translations: {
						'fr': 'Règles',
					},
					autogenerate: { directory: 'rules' },
				},
			],
		}),
	],
});
