<script>
	import { onMount } from 'svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

{#if data.session}
	<Dashboard {data} pageTitle="Resources">
		{#if data.story}
			<StoryblokComponent blok={data.story.content} />
		{/if}
	</Dashboard>
{:else}
	<p>login motherfucker!</p>
{/if}
