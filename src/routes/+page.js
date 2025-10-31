import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
    storyblokInit({
        accessToken: 'qJMNGz9DE0CFLbx8xjnfzwtt',
        use: [apiPlugin]
    });

    let storyblokApi = await useStoryblokApi();
    const dataStory = await storyblokApi.get('cdn/stories/dashboard', {
        version: 'published'
    });

    return {
        storyblokApi: storyblokApi,
        story: dataStory.data.story
    };
}
