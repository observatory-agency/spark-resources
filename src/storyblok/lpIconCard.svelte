<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok}>
	<div class="pt-6">
		<div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
			<div class="-mt-6">
				<div>
					<span
						class="inline-flex items-center justify-center p-3 shadow-lg bg-sparkRaspberry rounded-xl"
					>
						<img src={blok.icon.filename} alt={blok.title} class="w-8 h-8" />
					</span>
				</div>
				<h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
					{blok.title}
				</h3>
				<p class="mt-5 text-base leading-7 text-gray-600">
					{blok.description}
				</p>
			</div>
		</div>
	</div>
</div>
