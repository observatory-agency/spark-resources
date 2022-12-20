<script>
	import Dashboard from '$lib/components/Dashboard.svelte';
	import fullLogo from '$lib/logo-full.svg';
	import Hero from '$lib/assets/hero.png';
	export let data;
</script>

{#if data.session}
	<Dashboard {data} />
{:else}
	<div class="bg-sparkPeach">
		<!-- Hero section -->
		<div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
			<div
				class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
			>
				<div>
					<a href="https://sparkstrategies.co/">
						<img src={fullLogo} alt="Spark Strategies logo" class="w-40" />
					</a>
					<div class="mt-16">
						<div>
							<a href="#" class="inline-flex space-x-4">
								<span
									class="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-sparkRaspberry"
									>What's new</span
								>
								<span
									class="inline-flex items-center space-x-1 text-sm font-medium text-sparkRaspberry"
								>
									<span>New doc released! How to sell shit</span>
									<!-- Heroicon name: mini/chevron-right -->
									<svg
										class="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</a>
						</div>
						<div class="mt-6 sm:max-w-xl">
							<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								Sign up for our sick ass resource center!
							</h1>
							<p class="mt-4 text-xl text-gray-500">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
								commodo.
							</p>
						</div>
						<div class="flex mt-8">
							<a
								href="/register"
								class="inline-block px-6 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow bg-sparkRaspberry hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
								data-sveltekit-preload-data>Sign up today</a
							>
							<a
								href="/login"
								class="flex items-center gap-0.5 text-center px-6 py-3 font-medium text-lg text-sparkRaspberry"
								data-sveltekit-preload-data
								>Sign in &nbsp&rarr;
							</a>
						</div>
						<div class="pt-6 mt-8 border-t border-gray-200">
							<blockquote>
								<div>
									<p class="text-base text-gray-500">
										This is the coolest fuckin collection of docs i've ever read!
									</p>
								</div>
								<footer class="mt-3">
									<div class="flex items-center space-x-3">
										<div class="flex-shrink-0">
											<img
												class="w-6 h-6 rounded-full"
												src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
												alt=""
											/>
										</div>
										<div class="text-base font-medium text-gray-700">
											Marcia Hill, Digital Marketing Manager
										</div>
									</div>
								</footer>
							</blockquote>
						</div>
					</div>
				</div>
			</div>

			<div class="sm:mx-auto sm:max-w-3xl sm:px-6">
				<div
					class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
				>
					<div class="hidden sm:block">
						<div
							class="absolute inset-y-0 w-screen left-1/2 rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"
						/>
						<svg
							class="absolute -mr-3 top-8 right-1/2 lg:left-0 lg:m-0"
							width="404"
							height="392"
							fill="none"
							viewBox="0 0 404 392"
						>
							<defs>
								<pattern
									id="837c3e70-6c3a-44e6-8854-cc48c737b659"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
						</svg>
					</div>
					<div
						class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
					>
						<img
							class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
							src={Hero}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial/stats section -->
		<div class="relative mt-20">
			<div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
				<div class="relative sm:py-16 lg:py-0">
					<div
						aria-hidden="true"
						class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
					>
						<div class="absolute inset-y-0 w-full right-1/2 rounded-r-3xl bg-gray-50 lg:right-72" />
						<svg
							class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
							width="404"
							height="392"
							fill="none"
							viewBox="0 0 404 392"
						>
							<defs>
								<pattern
									id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
						</svg>
					</div>
					<div
						class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
					>
						<!-- Testimonial card-->
						<div class="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
							<img
								class="absolute inset-0 object-cover w-full h-full"
								src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
								alt=""
							/>
							<div class="absolute inset-0 bg-rose-500 mix-blend-multiply" />
							<div
								class="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"
							/>
							<div class="relative px-8">
								<div>
									<img
										class="h-12"
										src="https://tailwindui.com/img/logos/workcation.svg?color=white"
										alt="Workcation"
									/>
								</div>
								<blockquote class="mt-8">
									<div class="relative text-lg font-medium text-white md:flex-grow">
										<svg
											class="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-rose-400"
											fill="currentColor"
											viewBox="0 0 32 32"
											aria-hidden="true"
										>
											<path
												d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
											/>
										</svg>
										<p class="relative">
											Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium
											in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis
											amet.
										</p>
									</div>

									<footer class="mt-4">
										<p class="text-base font-semibold text-rose-200">
											Sarah Williams, CEO at Workcation
										</p>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>

				<div class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
					<!-- Content area -->
					<div class="pt-12 sm:pt-16 lg:pt-20">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							On a mission to empower teams
						</h2>
						<div class="mt-6 space-y-6 text-gray-500">
							<p class="text-lg">
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
								consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
								Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
								senectus vitae.
							</p>
							<p class="text-base leading-7">
								Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
								nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
								quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis
								elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut
								volutpat donec laoreet quam urna.
							</p>
							<p class="text-base leading-7">
								Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
								Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
								consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
								fermentum lacus in. Viverra.
							</p>
						</div>
					</div>

					<!-- Stats section -->
					<div class="mt-10">
						<dl class="grid grid-cols-2 gap-x-4 gap-y-8">
							<div class="pt-6 border-t-2 border-gray-100">
								<dt class="text-base font-medium text-gray-500">Founded</dt>
								<dd class="text-3xl font-bold tracking-tight text-gray-900">2021</dd>
							</div>

							<div class="pt-6 border-t-2 border-gray-100">
								<dt class="text-base font-medium text-gray-500">Employees</dt>
								<dd class="text-3xl font-bold tracking-tight text-gray-900">5</dd>
							</div>

							<div class="pt-6 border-t-2 border-gray-100">
								<dt class="text-base font-medium text-gray-500">Beta Users</dt>
								<dd class="text-3xl font-bold tracking-tight text-gray-900">521</dd>
							</div>

							<div class="pt-6 border-t-2 border-gray-100">
								<dt class="text-base font-medium text-gray-500">Raised</dt>
								<dd class="text-3xl font-bold tracking-tight text-gray-900">$25M</dd>
							</div>
						</dl>
						<div class="mt-10">
							<a href="#" class="text-base font-medium text-sparkRaspberry"
								>Learn more about how we're changing the world&nbsp&rarr;</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Logo cloud section -->
		<div class="mt-32">
			<div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
					<div>
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Backed by world-renowned investors
						</h2>
						<p class="max-w-3xl mt-6 text-lg leading-7 text-gray-500">
							Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
							consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
							Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames
							senectus vitae.
						</p>
						<div class="mt-6">
							<a href="#" class="text-base font-medium text-sparkRaspberry"
								>Meet our investors and advisors&nbsp&rarr;</a
							>
						</div>
					</div>
					<div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
								alt="Transistor"
							/>
						</div>

						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
								alt="Mirage"
							/>
						</div>

						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
								alt="Tuple"
							/>
						</div>

						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
								alt="Laravel"
							/>
						</div>

						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
								alt="StaticKit"
							/>
						</div>

						<div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
							<img
								class="max-h-12"
								src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
								alt="Workcation"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA section -->
		<div class="relative mt-24 sm:mt-32 sm:py-16">
			<div aria-hidden="true" class="hidden sm:block">
				<div class="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
				<svg
					class="absolute -ml-3 top-8 left-1/2"
					width="404"
					height="392"
					fill="none"
					viewBox="0 0 404 392"
				>
					<defs>
						<pattern
							id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
				</svg>
			</div>
			<div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div
					class="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-rose-500 sm:px-12 sm:py-20"
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
								class="text-rose-400 text-opacity-40"
								fill="currentColor"
								d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
							/>
							<path
								class="text-rose-600 text-opacity-40"
								fill="currentColor"
								d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
							/>
						</svg>
					</div>
					<div class="relative">
						<div class="sm:text-center">
							<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Get notified when we release new resources
							</h2>
							<p class="max-w-2xl mx-auto mt-6 text-lg text-rose-100">
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
								consectetur neque tristique pellentesque.
							</p>
						</div>
						<form action="#" class="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
							<div class="flex-1 min-w-0">
								<label for="cta-email" class="sr-only">Email address</label>
								<input
									id="cta-email"
									type="email"
									class="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
									placeholder="Enter your email"
								/>
							</div>
							<div class="mt-4 sm:mt-0 sm:ml-3">
								<button
									type="submit"
									class="block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
									>Notify me</button
								>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
