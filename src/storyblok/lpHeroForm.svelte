<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.description);
</script>

<section use:storyblokEditable={blok} class="flex items-center justify-center w-full h-screen px-4">
	<div class="grid grid-cols-12 gap-12 mx-auto max-w-7xl">
		<div
			class="{blok.alignment === 'left' ? 'order-2' : 'order-1'} relative z-50 col-span-7 space-y-8"
		>
			<h1 class="text-3xl sm:text-[64px] leading-none font-extrabold">{blok.title}</h1>
			<div class="prose prose-lg text-sparkBody">{@html resolvedRichText}</div>
		</div>
		<div
			class="{blok.alignment === 'right'
				? 'order-2'
				: 'order-1'} relative z-50 col-span-5 p-10 space-y-6 text-center bg-white shadow-lg rounded-xl"
		>
			<div class="space-y-2">
				<h4 class="text-2xl text-sparkBody">{blok.form_header}</h4>
				{#if blok.form_subtitle}
					<span class="text-2xl text-sparkHeader/80">{blok.form_subtitle}</span>
				{/if}
				<p>{blok.form_description}</p>
			</div>
			<form action="https://formspree.io/f/{blok.form_id}" method="POST" class="space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium text-left text-gray-700">Name</label>
					<div class="mt-1">
						<input
							id="name"
							name="name"
							type="text"
							autocomplete="name"
							required
							placeholder="Your first and last name"
							class="block w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none border-sparkHeader/70 focus:border-sparkRaspberry focus:outline-none focus:ring-sparkRaspberry"
						/>
					</div>
				</div>

				<div class="space-y-1">
					<label for="email" class="block text-sm font-medium text-left text-gray-700"
						>Email Address</label
					>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm appearance-none border-sparkHeader/70 focus:border-sparkRaspberry focus:outline-none focus:ring-sparkRaspberry"
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sparkRaspberry hover:bg-[#DA1B28] focus:outline-none focus:ring-2 focus:ring-sparkRaspberry focus:ring-offset-2"
						>{blok.cta_text}</button
					>
				</div>
			</form>
			<small class="inline-block text-center text-sparkHeader/60"
				>We won't send spam. Unsubscribe at any time.</small
			>
		</div>
	</div>
</section>

{#if blok.background_image}
	<div
		class="absolute z-10 hidden w-2/5 h-full px-6 py-10 top-12 rounded-tl-3xl rounded-bl-3xl left-full bg-gradient-to-b from-sparkRaspberry to-sparkOrange -translate-x-3/4 sm:px-10 xl:p-12 lg:block"
	>
		<!-- Decorative angle backgrounds -->
		<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
			<svg
				class="absolute inset-0 w-full h-full"
				width="343"
				height="388"
				viewBox="0 0 343 388"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
					fill="url(#linear1)"
					fill-opacity=".1"
				/>
				<defs>
					<linearGradient
						id="linear1"
						x1="254.553"
						y1="107.554"
						x2="961.66"
						y2="814.66"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#fff" />
						<stop offset="1" stop-color="#fff" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div
			class="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
			aria-hidden="true"
		>
			<svg
				class="absolute inset-0 w-full h-full"
				width="359"
				height="339"
				viewBox="0 0 359 339"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
					fill="url(#linear2)"
					fill-opacity=".1"
				/>
				<defs>
					<linearGradient
						id="linear2"
						x1="192.553"
						y1="28.553"
						x2="899.66"
						y2="735.66"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#fff" />
						<stop offset="1" stop-color="#fff" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div
			class="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
			aria-hidden="true"
		>
			<svg
				class="absolute inset-0 w-full h-full"
				width="160"
				height="678"
				viewBox="0 0 160 678"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
					fill="url(#linear3)"
					fill-opacity=".1"
				/>
				<defs>
					<linearGradient
						id="linear3"
						x1="192.553"
						y1="325.553"
						x2="899.66"
						y2="1032.66"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#fff" />
						<stop offset="1" stop-color="#fff" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</div>
{/if}
