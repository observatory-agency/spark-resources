<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.intro);
</script>

<section use:storyblokEditable={blok}>
	<div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
		<img
			src={blok.background_image.filename}
			alt=""
			class="absolute inset-0 object-cover w-full h-full -z-10 mix-blend-soft-light"
		/>
		<svg
			viewBox="0 0 1097 845"
			aria-hidden="true"
			class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
		>
			<path
				fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
				fill-opacity=".2"
				d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
			/>
			<defs>
				<linearGradient
					id="10724532-9d81-43d2-bb94-866e98dd6e42"
					x1="1097.04"
					x2="-141.165"
					y1=".22"
					y2="363.075"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E84853" />
					<stop offset="1" stop-color="#D881AB" />
				</linearGradient>
			</defs>
		</svg>
		<svg
			viewBox="0 0 1097 845"
			aria-hidden="true"
			class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
		>
			<path
				fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
				fill-opacity=".2"
				d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
			/>
			<defs>
				<linearGradient
					id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
					x1="1097.04"
					x2="-141.165"
					y1=".22"
					y2="363.075"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E69649" />
					<stop offset="1" stop-color="#E69649" />
				</linearGradient>
			</defs>
		</svg>
		<div class="px-6 mx-auto max-w-7xl lg:px-8">
			<div class="mx-auto max-w-7xl lg:mx-0">
				{#if blok.announcement_text}
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							<span class="text-gray-600">
								{blok.announcement_text}
								<a href={blok.announcement_link} class="font-semibold text-indigo-600"
									><span class="absolute inset-0" aria-hidden="true" />{blok.announcement_link_text}
									<span aria-hidden="true">&rarr;</span></a
								>
							</span>
						</div>
					</div>
				{/if}
				<h2 class="text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">
					{blok.title}
				</h2>
				<p class="mt-6 text-lg leading-8 text-center text-gray-300">
					{@html resolvedRichText}
				</p>
			</div>
		</div>
	</div>
</section>
