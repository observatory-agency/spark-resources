<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.description);
</script>

<section use:storyblokEditable={blok} class="px-4 mx-auto max-w-7xl">
	<div class="relative px-6 lg:px-8">
		<div class="grid grid-cols-12 gap-16">
			<div class="col-span-6 space-y-6">
				<div>
					<h1 class="mt-2 text-xl font-bold tracking-tight text-sparkHeader sm:text-3xl">
						{blok.title}
					</h1>
					<p class="mt-6 text-lg text-sparkBody/80">
						{@html resolvedRichText}
					</p>
				</div>
				<a
					href={blok.button_link}
					class="inline-block max-w-[200px] mx-auto px-6 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow bg-sparkRaspberry hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
					>{blok.button_text}</a
				>
			</div>
			<div class="col-span-6">
				<img src={blok.image.filename} alt={blok.title} class="rounded-lg shadow-lg" />
			</div>
		</div>
	</div>
</section>
