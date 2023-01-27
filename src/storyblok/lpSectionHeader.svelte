<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<div class="px-6 py-16 mx-auto max-w-7xl sm:py-20 lg:px-8">
		<div class="text-center">
			{#if blok.eyebrow}
				<h2 class="text-lg font-semibold text-indigo-600">{blok.eyebrow}</h2>
			{/if}
			<p class="mt-1 text-3xl font-bold tracking-tight sm:text-4xl text-sparkHeader">
				{blok.title}
			</p>
			<p class="max-w-xl mx-auto mt-5 text-xl text-sparkBody/80">
				{blok.subtitle}
			</p>
		</div>
	</div>
</div>
