import { getStoryblokApi } from '$lib/storyblok';

export async function load() {
    const storyblokApi = await getStoryblokApi();
    const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
        version: 'published'
    });

    return {
        story: dataStory.data.story
    };
}
