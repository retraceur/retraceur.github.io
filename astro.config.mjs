// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Retraceur',
			defaultLocale: 'root',
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://wsrv.nl/?url=https://raw.githubusercontent.com/retraceur/retraceur.github.io/refs/heads/main/src/assets/retraceur-docs-og.png',
					},
				},
			],
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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/retraceur' },
				{ icon: 'blueSky', label: 'blueSky', href: 'https://bsky.app/profile/retraceur.bsky.social' },
			],
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
					label: 'Managing your Website',
					translations: {
						'fr': 'Gérer votre site Web',
					},
					collapsed: true,
					autogenerate: { directory: 'administration' },
				},
				{
					label: 'API',
					translations: {
						'fr': 'API',
					},
					collapsed: true,
					items: [
						'api/rest'
					],
				},
				{
					label: 'Rules',
					translations: {
						'fr': 'Règles',
					},
					collapsed: true,
					autogenerate: { directory: 'rules' },
				},
			],
		}),
	],
});
