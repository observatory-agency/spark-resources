<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<a href={blok.Link.url} target="_blank" rel="noreferrer">
		<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
			<div>
				<img
					src={blok.Image.filename}
					alt={blok.Name}
					class="object-cover object-center w-full h-56"
				/>
			</div>
			<div class="px-4 py-5 space-y-4 sm:p-6">
				<span
					class="inline-flex items-center rounded-full bg-sparkHeader px-3 py-0.5 text-sm font-medium text-white"
					>{blok.Category}</span
				>
				<div>
					<h3 class="text-lg 2xl:text-xl font-medium leading-6 text-sparkHeader">
						{blok.Name}
					</h3>
					<p class="max-w-2xl mt-2 text-sparkBody/90">
						{blok.Description.content[0].content[0].text}
					</p>
				</div>
			</div>
		</div>
	</a>
</div>
