import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
    const { storyblokApi, session } = await parent();

    if (!session) {
        throw redirect(303, '/');
    }

    const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
        version: 'published'
    });

    return {
        story: dataStory.data.story
    };
}
