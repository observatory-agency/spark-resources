<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

<section use:storyblokEditable={blok} class="px-4 mx-auto max-w-screen-2xl">
	<div class="grid gap-6 {blok.number_of_columns === '3' ? 'grid-cols-3' : 'grid-cols-4'}">
		{#each blok.cards as blok}
			<StoryblokComponent {blok} />
		{/each}
	</div>
</section>
