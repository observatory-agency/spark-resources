<script>
	import { storyblokEditable, renderRichText } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.description);
</script>

<div class="relative overflow-hidden isolate">
	<svg
		class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
				width="200"
				height="200"
				x="50%"
				y="-1"
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<rect
			width="100%"
			height="100%"
			stroke-width="0"
			fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
		/>
	</svg>
	<div class="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-40">
		<div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
			<svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 91.21 91.21" class="w-16"
				><defs
					><style>
						.cls-1 {
							fill: #e84853;
						}
					</style></defs
				><g id="Layer_1-2"
					><path
						d="M68.38 53.63c.03 2.53-.46 4.93-1.44 7.12-.99 2.2-2.37 4.12-4.1 5.73-1.73 1.61-3.83 2.9-6.24 3.85-2.41.94-5.06 1.44-7.87 1.47-.2 0-.44 0-.72.01-2.47.04-8.24.14-11.45-.7-11.14-2.9-14.35-7.2-15.09-10.29-.67-2.83.59-5.47 2.14-6.84 1.26-1.11 2.93-1.7 4.63-1.7.61 0 1.23.08 1.83.24 2.04.54 3.58 1.91 4.22 3.77 2.16 6.23 7.93 12.68 13.85 12.68 2.71 0 4.94-.76 6.63-2.25 1.66-1.47 2.49-3.42 2.46-5.8-.02-2.13-.86-3.75-2.79-5.43-1.81-1.58-4.78-3.09-8.8-4.49l-7.91-2.77c-5.07-1.78-8.82-3.77-11.12-5.93-1.77-1.65-3.1-4.49-3.4-7.24-.04-.38-.11-1.38-.11-1.51-.03-2.48.49-4.85 1.52-7.04 1.04-2.19 2.48-4.11 4.3-5.69 1.82-1.58 4.01-2.86 6.52-3.81 2.51-.94 5.29-1.44 8.27-1.47 1.38-.01 2.83.07 4.33.25.08.01.21.03.38.05 6.22.85 11.38.92 15.34.21.12-.02.33-.08.53-.13.05-.01.1-.03.15-.04l-.1 6.75c-.03 1.8-1.07 3.33-2.71 3.99-1.63.66-3.42.28-4.66-.98-4.64-4.69-8.66-6.97-12.3-6.97-1.81 0-5.11.23-6.85 1.78-1.52 1.36-2.29 3.17-2.26 5.4.01 1.12.27 2.19.78 3.19.5 1.01 1.19 1.84 2.03 2.5.94.7 2.28 1.46 3.99 2.26 1.71.81 3.62 1.59 5.69 2.31l7.23 2.63c2.89 1.06 5.33 2.28 7.23 3.63 1 .75 1.86 1.52 2.56 2.29 2.14 2.4 3.25 5.41 3.28 8.97ZM52.87 11.63l1.58-9.68c.15-.92-.47-1.78-1.39-1.93-.92-.15-1.78.47-1.93 1.39l-1.61 9.85c1.16.15 2.27.27 3.35.37ZM74.81 9.91c-.72-.59-1.78-.48-2.37.23l-3.28 4.02-.03 1.78-.05 3.65 5.97-7.31c.59-.72.48-1.78-.24-2.37Z"
						class="cls-1"
					/><path
						d="M88.81 29.32c-.33-.87-1.3-1.31-2.17-.98L63.09 37.2c.75.44 1.48.88 2.14 1.35l.05.04.04.03c.4.3.78.6 1.14.91l21.36-8.04c.87-.33 1.31-1.3.98-2.17ZM89.8 51.14l-17.51-2.87c.32 1.12.55 2.29.66 3.52l16.3 2.67c.92.15 1.78-.47 1.93-1.39.15-.92-.47-1.78-1.39-1.93ZM58.38 74.64s-.05.02-.07.03c-1 .39-2.04.7-3.1.96l4.58 12.17a1.696 1.696 0 0 0 2.17.99c.84-.33 1.26-1.26.97-2.11l-4.54-12.03ZM38.89 76.21l-2.14 13.05c-.15.92.47 1.78 1.39 1.93.92.15 1.78-.47 1.93-1.39l2.19-13.36c-1.24-.05-2.36-.13-3.37-.23ZM31.68 13.53c.69-.33 1.41-.63 2.14-.91.32-.12.66-.21.99-.32l-3.36-8.94a1.683 1.683 0 1 0-3.15 1.19l3.38 8.97ZM19.57 39.64 1.95 36.75c-.92-.15-1.78.47-1.93 1.39-.15.92.47 1.78 1.39 1.93l20.06 3.29c-.77-1.13-1.41-2.39-1.91-3.72ZM17.67 54.39 3.48 59.73a1.678 1.678 0 0 0 .33 3.23c.29.05.59.02.87-.08l12.01-4.52c.1-1.37.44-2.72.99-3.97ZM23.21 70.42l-7 8.58c-.55.71-.44 1.73.25 2.31.23.18.5.31.79.36.59.1 1.19-.13 1.57-.59l7.27-8.91a27.28 27.28 0 0 1-2.89-1.74ZM20.42 24.5c.19-.41.42-.79.63-1.18l-8.83-7.21a1.684 1.684 0 1 0-2.13 2.61l9.52 7.77c.24-.67.5-1.34.81-1.99ZM81.17 72.45l-.06.04-10.54-8.61c-.52.99-1.09 1.94-1.74 2.83l10.2 8.33c.23.19.5.31.79.36.75.13 1.49-.27 1.8-.96s.12-1.52-.47-1.99Z"
						class="cls-1"
					/></g
				></svg
			>

			<h1 class="mt-10 text-4xl font-bold tracking-tight text-sparkHeader sm:text-6xl">
				{blok.title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-sparkBody">{@html resolvedRichText}</p>
			<div class="flex justify-start mt-10 gap-x-6">
				<a
					href={blok.button_link.url}
					class="inline-block max-w-[224px] px-6 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow bg-sparkRaspberry hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
					>{blok.button_text}</a
				>
			</div>
			<div class="max-w-md mt-16 sm:mt-20">
				<dl
					class="flex flex-col mx-auto text-base leading-7 text-sparkBody gap-x-6 gap-y-10 lg:mx-0"
				>
					<div class="relative pl-9">
						<dt class="inline font-semibold text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="absolute w-5 h-5 text-sparkOrange left-1 top-1"
							>
								<path
									fill-rule="evenodd"
									d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
									clip-rule="evenodd"
								/>
							</svg>
						</dt>
						<dd class="inline text-lg">
							{blok.feature_1_copy}
						</dd>
					</div>
					<div class="relative pl-9">
						<dt class="inline font-semibold text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="absolute w-5 h-5 text-sparkOrange left-1 top-1"
							>
								<path
									fill-rule="evenodd"
									d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
									clip-rule="evenodd"
								/>
							</svg>
						</dt>
						<dd class="inline text-lg">
							{blok.feature_2_copy}
						</dd>
					</div>
					<div class="relative pl-9">
						<dt class="inline font-semibold text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="absolute w-5 h-5 text-sparkOrange left-1 top-1"
							>
								<path
									fill-rule="evenodd"
									d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
									clip-rule="evenodd"
								/>
							</svg>
						</dt>
						<dd class="inline text-lg">
							{blok.feature_3_copy}
						</dd>
					</div>
					<div class="relative pl-9">
						<dt class="inline font-semibold text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="absolute w-5 h-5 text-sparkOrange left-1 top-1"
							>
								<path
									fill-rule="evenodd"
									d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
									clip-rule="evenodd"
								/>
							</svg>
						</dt>
						<dd class="inline text-lg">
							{blok.feature_4_copy}
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<div
			class="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
				<div
					class="p-2 -m-2 rounded-xl bg-sparkRaspberry/40 ring-1 ring-inset ring-sparkOrange/50 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<img
						src={blok.image.filename}
						alt="App screenshot"
						width="2432"
						height="1442"
						class="w-[46rem] h-[55rem] rounded-md object-cover shadow-2xl ring-1 ring-sparkRaspberry/40"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
