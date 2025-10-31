<script>
	import Logo from '$lib/logo.svg';
	import signIn from '$lib/assets/sign-in.jpg';
	export let form;

	console.log(form);
</script>

<svelte:head>
	<title>Password Reset | Spark Resources</title>
</svelte:head>

<div class="flex min-h-full">
	<div
		class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="w-full max-w-sm mx-auto lg:w-96">
			<div>
				<a href="/">
					<img src={Logo} alt="Spark Strategies logo" class="w-16" />
				</a>
				<h2 class="mt-6 text-3xl text-fadedBlack text-pretty">Create a new password</h2>
				<p class="mt-2 text-fadedBlack text-pretty">Please create a new password.</p>
				<p class="mt-2 text-fadedBlack text-pretty">
					Make sure you clicked on the link in your email!
				</p>
			</div>

			<div class="mt-8">
				<div class="mt-6">
					<form action="?/update" method="POST" class="space-y-6">
						<div>
							<label for="password" class="block text-sm font-medium text-fadedBlack"
								>Password</label
							>
							<div class="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									placeholder="Must be at least 6 characters"
									class="block w-full px-3 py-2 placeholder-gray-400 border border-fadedBlack/70 rounded-md shadow-sm appearance-none focus:border-fadedBlack focus:outline-none focus:ring-fadedBlack"
								/>
							</div>
							{#if form}
								<p class="text-fadedBlack font-semibold" />
								<div class="rounded-md bg-fadedBlack p-4 mt-3">
									<div class="flex">
										<div class="flex-shrink-0">
											<!-- Heroicon name: mini/x-circle -->
											<svg
												class="h-5 w-5 text-fadedBlack"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<div class="ml-3">
											<h3 class="font-medium text-fadedBlack">{form.fuck}</h3>
										</div>
									</div>
								</div>
							{/if}
						</div>
						<div>
							<button
								type="submit"
								class="flex justify-center w-full px-4 py-2 font-medium text-fadedBlack border border-transparent rounded-md shadow-sm bg-warmWhite hover:bg-citrusOrange focus:outline-none focus:ring-2 focus:ring-fadedBlack focus:ring-offset-2"
								>Submit</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="relative flex-1 hidden w-0 lg:block">
		<img class="absolute inset-0 object-cover w-full h-full" src={signIn} alt="" />
	</div>
</div>
