<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

{#key blok}
	<section
		use:storyblokEditable={blok}
		class="grid xl:grid-cols-3 gap-6 px-4 mx-auto mt-8 max-w-7xl sm:px-6 md:px-8"
	>
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</section>
{/key}
