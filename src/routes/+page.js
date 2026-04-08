import { redirect } from '@sveltejs/kit';
import { getStoryblokApi } from '$lib/storyblok';

export async function load({ parent }) {
    const { session } = await parent();

    if (session) {
        throw redirect(303, '/resources');
    }

    const storyblokApi = await getStoryblokApi();
    const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
        version: 'published'
    });

    return {
        story: dataStory.data.story
    };
}
