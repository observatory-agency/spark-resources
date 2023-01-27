<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.intro);
</script>

<div class="isolate bg-sparkPeach">
	<div
		class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
	>
		<svg
			class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
			viewBox="0 0 1155 678"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
				fill-opacity=".15"
				d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
			/>
			<defs>
				<linearGradient
					id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
					x1="1155.49"
					x2="-78.208"
					y1=".177"
					y2="474.645"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E84853" />
					<stop offset="1" stop-color="#E69649" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<section use:storyblokEditable={blok}>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-4xl pt-20 pb-32 sm:pt-48 sm:pb-40">
				<div>
					{#if blok.announcement_text}
						<div class="hidden sm:mb-8 sm:flex sm:justify-center">
							<div
								class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							>
								<span class="text-gray-600">
									{blok.announcement_text}
									<a href={blok.announcement_link} class="font-semibold text-indigo-600"
										><span
											class="absolute inset-0"
											aria-hidden="true"
										/>{blok.announcement_link_text}
										<span aria-hidden="true">&rarr;</span></a
									>
								</span>
							</div>
						</div>
					{/if}

					<div class="flex flex-col justify-center space-y-8">
						<div>
							<h1
								class="text-4xl text-sparkHeader font-bold tracking-tight sm:text-center sm:text-6xl"
							>
								{blok.title}
							</h1>
							<p class="mt-6 max-w-2xl mx-auto text-lg text-sparkBody/80 sm:text-center">
								{@html resolvedRichText}
							</p>
						</div>
						<a
							href={blok.button_link}
							class="inline-block max-w-[200px] mx-auto px-6 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow bg-sparkRaspberry hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
							>{blok.button_text}</a
						>
					</div>
					<div
						class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					>
						<svg
							class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
							viewBox="0 0 1155 678"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
								fill-opacity=".2"
								d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
							/>
							<defs>
								<linearGradient
									id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
									x1="1155.49"
									x2="-78.208"
									y1=".177"
									y2="474.645"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#E84853" />
									<stop offset="1" stop-color="#D881AB" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
