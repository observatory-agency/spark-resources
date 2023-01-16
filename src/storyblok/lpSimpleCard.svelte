<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<a href={blok.link.url} target="_blank" rel="noreferrer">
		<div class="bg-white rounded-lg shadow-md">
			<div>
				<img src={blok.image.filename} alt={blok.title} />
			</div>
			<div class="p-6 space-y-2">
				<h4 class="text-xl font-medium text-sparkHeader">{blok.title}</h4>
				<p class="text-3xl font-bold text-sparkBlue font-display">{blok.price}</p>
			</div>
		</div>
	</a>
</div>
