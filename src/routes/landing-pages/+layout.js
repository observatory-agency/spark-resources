import { getStoryblokApi } from '$lib/storyblok';

export async function load() {
    const storyblokApi = await getStoryblokApi();

    return {
        storyblokApi
    };
}
