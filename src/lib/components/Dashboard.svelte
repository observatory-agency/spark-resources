<script>
	import { clickOutside } from '../utils/clickOutside.js';

	import Logo from '$lib/emblem-white.svg';
	import LogoFull from '$lib/logo-full.svg';
	export let data;
	export let pageTitle;

	let sidebar = false;
</script>

<div>
	{#if sidebar}
		<div class="relative z-40" role="dialog" aria-modal="true">
			<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
			<div class="fixed inset-0 z-40 flex">
				<div class="relative flex flex-col flex-1 w-full max-w-xs bg-gradient">
					<div class="absolute top-0 right-0 pt-2 -mr-12">
						<button
							type="button"
							class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							on:click={() => {
								sidebar = false;
							}}
						>
							<span class="sr-only">Close sidebar</span>
							<!-- Heroicon name: outline/x-mark -->
							<svg
								class="w-6 h-6 text-sparkHeader"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
						<div class="flex items-center flex-shrink-0 px-4">
							<img src={Logo} alt="Spark Strategies Icon" class="w-16" />
						</div>
						<nav class="px-2 mt-5 space-y-1">
							<a
								href="/resources"
								class="flex items-center px-2 py-2 font-medium rounded-md bg-sparkOrange/70 text-sparkHeader group"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="flex-shrink-0 w-6 h-6 mr-3 text-sparkBody"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>

								Resources
							</a>
						</nav>
					</div>
					<div class="flex flex-shrink-0 p-4 border-t border-sparkRaspberry/40">
						<div>
							{#if data?.session?.user?.user_metadata?.full_name}
								<p class="text-sm font-medium text-sparkBody">
									{data.session.user.user_metadata.full_name}
								</p>
							{:else}
								<p class="text-sm font-medium text-sparkBody">{data.session.user.email}</p>
							{/if}
							<form action="/logout" method="POST">
								<button
									type="submit"
									class="text-xs font-medium text-sparkHeader/90 group-hover:text-sparkHeader"
									>Logout</button
								>
							</form>
						</div>
					</div>
				</div>
				<div class="flex-shrink-0 w-14" aria-hidden="true">
					<!-- Force sidebar to shrink to fit close icon -->
				</div>
			</div>
		</div>
	{/if}

	<!-- Static sidebar for desktop -->
	<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
		<div class="flex flex-col flex-1 min-h-0 bg-gradient">
			<div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
				<div class="flex items-center flex-shrink-0 px-4">
					<img src={Logo} alt="Spark Strategies Icon" class="w-16" />
				</div>
				<nav class="flex-1 px-2 mt-6 space-y-2">
					<a
						href="/resources"
						class="flex items-center px-2 py-2 font-medium rounded-md bg-sparkOrange/70 text-sparkHeader group"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="flex-shrink-0 w-6 h-6 mr-3 text-sparkBody"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
							/>
						</svg>

						Resources
					</a>
				</nav>
			</div>
			<div class="flex flex-shrink-0 p-4 border-t border-sparkHeader/30">
				<div class="flex items-center">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-8 h-8"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<div class="ml-3">
						{#if data?.session?.user?.user_metadata?.full_name}
							<p class="text-sm font-medium text-sparkBody">
								{data.session.user.user_metadata.full_name}
							</p>
						{:else}
							<p class="text-sm font-medium text-sparkBody">{data.session.user.email}</p>
						{/if}
						<form action="/logout" method="POST">
							<button
								type="submit"
								class="text-xs font-medium text-sparkHeader/90 group-hover:text-sparkHeader"
								>Logout</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col flex-1 md:pl-64">
		<div class="flex justify-between pt-2 pl-4 sm:pl-3 sm:pt-3 md:hidden">
			<img src={LogoFull} alt="Spark Strategies Icon" class="w-32" />
			<button
				type="button"
				class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-sparkHeader hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sparkBlue"
				on:click={() => {
					sidebar = true;
				}}
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<main class="flex-1 bg-sparkPeach">
			<div class="py-6">
				<div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
					<h1 class="text-3xl font-semibold lg:text-5xl text-sparkHeader font-display">
						{pageTitle}
					</h1>
				</div>
				<slot />
			</div>
		</main>
	</div>
</div>

<style>
	.bg-gradient {
		background: linear-gradient(
			to bottom,
			#e84853,
			#e85852,
			#e86650,
			#e8734f,
			#e87f4d,
			#e78b4b,
			#e69649
		);
	}
</style>
