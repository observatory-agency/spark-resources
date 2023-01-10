import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import lpHeroForm from '$storyblok/lpHeroForm.svelte';
import LandingPage from '$storyblok/LandingPage.svelte';

export async function load() {
	storyblokInit({
		accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
		use: [apiPlugin],
		components: {
			lp_hero_with_form: lpHeroForm,
			LandingPage: LandingPage
		}
	});
	let storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
