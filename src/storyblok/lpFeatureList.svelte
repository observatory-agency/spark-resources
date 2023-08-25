<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.intro);
</script>

<section use:storyblokEditable={blok} class="relative px-4 py-24 mx-auto spark-bg sm:py-32">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div
			class="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-6"
		>
			<div class="col-span-3">
				<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{blok.title}
				</h2>
				<p class="mt-6 prose prose-lg prose-p:text-sparkBody">
					{@html resolvedRichText}
				</p>
			</div>
			<dl
				class="grid grid-cols-1 col-span-3 text-base leading-7 text-gray-600 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-4"
			>
				<div class="relative pl-9">
					<dt class="font-semibold text-gray-900">
						<svg
							class="absolute left-0 w-5 h-5 top-1 text-sparkRaspberry"
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
						{blok.feature_1}
					</dt>
				</div>

				<div class="relative pl-9">
					<dt class="font-semibold text-gray-900">
						<svg
							class="absolute left-0 w-5 h-5 top-1 text-sparkRaspberry"
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
						{blok.feature_2}
					</dt>
				</div>

				<div class="relative pl-9">
					<dt class="font-semibold text-gray-900">
						<svg
							class="absolute left-0 w-5 h-5 top-1 text-sparkRaspberry"
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
						{blok.feature_3}
					</dt>
				</div>

				<div class="relative pl-9">
					<dt class="font-semibold text-gray-900">
						<svg
							class="absolute left-0 w-5 h-5 top-1 text-sparkRaspberry"
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
						{blok.feature_4}
					</dt>
				</div>
			</dl>
		</div>
	</div>
</section>

<style>
	.spark-bg::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('https://sparkstrategies.co/patterns/spark-pattern.svg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
