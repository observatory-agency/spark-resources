<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>{data.story.name} | Spark Strategies</title>
</svelte:head>

<div class="bg-sparkPeach">
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
