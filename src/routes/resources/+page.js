import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { storyblokApi } = await parent();
	const { session } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
		version: 'draft'
	});

	if (!session) {
		throw redirect(303, '/');
	}

	return {
		story: dataStory.data.story
	};
}
