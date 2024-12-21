// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Retraceur',
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
					label: 'Getting started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'API',
					items: [
						'api/rest'
					],
				},
			],
		}),
	],
});
