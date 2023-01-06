export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
		version: 'published'
	});

	return {
		story: dataStory.data.story
	};
}
