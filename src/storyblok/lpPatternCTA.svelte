<script>
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<section use:storyblokEditable={blok}>
	<div class="relative mt-24 sm:mt-32 sm:py-16">
		<div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
			<div
				class="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-sparkRaspberry sm:px-12 sm:py-20"
			>
				<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
					<svg
						class="absolute inset-0 w-full h-full"
						preserveAspectRatio="xMidYMid slice"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 1463 360"
					>
						<path
							class="text-sparkHeader text-opacity-40"
							fill="currentColor"
							d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
						/>
						<path
							class="text-sparkHeader text-opacity-10"
							fill="currentColor"
							d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
						/>
					</svg>
				</div>
				<div class="relative flex flex-col items-center space-y-10">
					<div class="sm:text-center">
						<h2 class="text-3xl font-bold tracking-tight text-sparkPeach sm:text-4xl">
							{blok.title}
						</h2>
						<p class="max-w-2xl mx-auto mt-4 text-lg text-sparkPeach/90">
							{blok.description}
						</p>
					</div>
					<a
						href={blok.button_link}
						class="inline-block px-5 py-3 mx-auto text-base font-medium border border-transparent rounded-md shadow bg-sparkBlue text-sparkPeach hover:bg-sparkBlueDark focus:outline-none focus:ring-2 focus:ring-sparkPeach focus:ring-offset-2 focus:ring-offset-sparkRaspberry sm:px-10"
						>{blok.button_text}</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
