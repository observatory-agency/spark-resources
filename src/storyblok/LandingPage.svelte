<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

{#key blok}
	<section use:storyblokEditable={blok} class="relative space-y-24">
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</section>
{/key}
