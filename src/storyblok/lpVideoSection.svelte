<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<section use:storyblokEditable={blok} class="max-w-6xl px-4 mx-auto">
	<div class="pt-24 sm:pt-32 lg:pt-40">
		<div class="max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-screen-2xl lg:px-8">
			<div>
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-sparkHeader sm:text-4xl">
					{blok.title}
				</h2>
				<p class="mx-auto mt-5 text-xl text-sparkBody/80 max-w-prose">
					{blok.description}
				</p>
			</div>
			<div class="mx-auto mt-12">
				<iframe
					width="100%"
					height="600"
					src={`https://www.youtube.com/embed/${blok.video_embed_id}`}
					title={blok.title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		</div>
	</div>
</section>
