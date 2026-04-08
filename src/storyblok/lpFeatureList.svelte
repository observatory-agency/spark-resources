<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.intro);
	$: features = [blok.feature_1, blok.feature_2, blok.feature_3, blok.feature_4].filter(Boolean);
</script>

<section use:storyblokEditable={blok} class="relative py-16 bg-paleLime/40 sm:py-24">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-5xl">
			<h2 class="text-3xl font-bold tracking-tight text-fadedBlack sm:text-4xl">
				{blok.title}
			</h2>
			<div
				class="mt-6 prose prose-lg max-w-none prose-p:text-fadedBlack/80 prose-strong:text-fadedBlack prose-li:text-fadedBlack/80"
			>
				{@html resolvedRichText}
			</div>
		</div>

		{#if features.length > 0}
			<dl class="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<div class="relative p-5 rounded-xl bg-neonGreen/20">
						<dt class="flex items-start gap-3 text-base font-semibold text-fadedBlack">
							<svg
								class="flex-shrink-0 w-5 h-5 mt-0.5 text-forestGreen"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							{feature}
						</dt>
					</div>
				{/each}
			</dl>
		{/if}
	</div>
</section>
