<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<div class="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8">
		<div class="text-center">
			{#if blok.eyebrow}
				<h2 class="text-lg font-semibold text-indigo-600">{blok.eyebrow}</h2>
			{/if}
			<p class="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
				{blok.title}
			</p>
			<p class="max-w-xl mx-auto mt-5 text-xl text-gray-500">
				{blok.subtitle}
			</p>
		</div>
	</div>
</div>
