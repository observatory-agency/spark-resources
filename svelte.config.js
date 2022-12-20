import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$storyblok: './src/storyblok',
			'@storyblok/svelte': './node_modules/@storyblok/svelte'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
