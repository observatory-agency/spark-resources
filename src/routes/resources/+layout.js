import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import ResourceCard from '$storyblok/ResourceCard.svelte';
import Dashboard from '$storyblok/Dashboard.svelte';

export async function load() {
	storyblokInit({
		accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
		use: [apiPlugin],
		components: {
			resource_card: ResourceCard,
			Dashboard: Dashboard
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
