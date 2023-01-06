import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
	storyblokInit({
		accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
		use: [apiPlugin]
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
