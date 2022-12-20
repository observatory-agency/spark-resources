// import { getServerSession } from '@supabase/auth-helpers-sveltekit';
// import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

// export async function load(event) {
// 	storyblokInit({
// 		accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
// 		use: [apiPlugin],
// 		apiOptions: { region: 'us' }
// 	});
// 	let storyblokApi = await useStoryblokApi();

// 	return {
// 		session: await getServerSession(event),
// 		storyblokApi: storyblokApi
// 	};
// }

import { getServerSession } from '@supabase/auth-helpers-sveltekit';

export async function load(event) {
	return {
		session: await getServerSession(event)
	};
}
