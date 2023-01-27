<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<div class="h-full pt-6">
		<div class="flow-root h-full px-6 pb-8 bg-white rounded-lg">
			<div class="flex flex-col justify-between h-full -mt-6">
				<div class="flex-1">
					<span
						class="inline-flex items-center justify-center p-3 shadow-lg bg-sparkRaspberry rounded-xl"
					>
						<img src={blok.icon.filename} alt={blok.title} class="w-8 h-8" />
					</span>
				</div>
				<h3 class="flex-1 mt-8 text-lg font-semibold leading-8 tracking-tight text-sparkHeader">
					{blok.title}
				</h3>
				<p class="flex-auto mt-5 text-base leading-7 text-sparkBody/80">
					{blok.description}
				</p>
			</div>
		</div>
	</div>
</div>
