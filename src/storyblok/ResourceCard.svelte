<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="transition duration-300 assCheese ease-in-out transform rounded-lg hover:shadow-xl hover:scale-[1.01] hover:translate-x-1.5 hover:translate-y-1.5"
>
	<a href={blok.Link.url} target="_blank" rel="noreferrer">
		<div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow h-full">
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
					<h3 class="text-lg font-medium leading-6 2xl:text-xl text-sparkHeader">
						{blok.Name}
					</h3>
					<p class="max-w-2xl mt-2 text-sparkBody/80">
						{blok.Description.content[0].content[0].text}
					</p>
				</div>
			</div>
		</div>
	</a>
</div>
