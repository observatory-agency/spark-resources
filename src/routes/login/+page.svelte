<script>
	import Logo from '$lib/logo.svg';
	import signIn from '$lib/assets/sign-in.jpg';
	export let form;
</script>

<svelte:head>
	<title>Login | Spark Resources</title>
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
				<h2 class="mt-6 text-3xl text-fadedBlack">Sign in to your account</h2>
				<p class="mt-2 text-fadedBlack">
					New here?
					<a href="/register" class="font-medium text-fadedBlack hover:text-citrusOrange underline"
						>Register</a
					>
				</p>
			</div>

			<div class="mt-8">
				<div class="mt-6">
					<p class="font-medium text-fadedBlack">Sign in with</p>

					<div class="mt-1">
						<form method="POST">
							<button
								formaction="?/login&provider=google"
								class="inline-flex justify-center w-full px-4 py-2 font-medium text-fadedBlack bg-white border border-fadedBlack/70 rounded-md shadow-sm hover:bg-fadedBlack/10"
							>
								<span class="sr-only">Sign in with Google</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
									><path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/><path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/><path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/><path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/><path fill="none" d="M1 1h22v22H1z" /></svg
								>
							</button>
						</form>
					</div>
				</div>

				<div class="relative mt-6">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-sparkHeader/20" />
					</div>
					<div class="relative flex justify-center text-sm">
						<span class="px-2 text-sparkHeader bg-sparkPeach">Or continue with</span>
					</div>
				</div>

				<div class="mt-6">
					<form action="?/login" method="POST" class="space-y-6">
						<div>
							<label for="email" class="block font-medium text-fadedBlack">Email address</label>
							<div class="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="block w-full px-3 py-2 placeholder-gray-400 border border-fadedBlack/70 rounded-md shadow-sm appearance-none focus:border-fadedBlack focus:outline-none focus:ring-fadedBlack"
								/>
							</div>
						</div>

						<div class="space-y-1">
							<label for="password" class="block font-medium text-fadedBlack">Password</label>
							<div class="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="block w-full px-3 py-2 placeholder-gray-400 border border-fadedBlack/70 rounded-md shadow-sm appearance-none focus:border-fadedBlack focus:outline-none focus:ring-fadedBlack"
								/>
							</div>
							{#if form}
								<p class="text-red-600 font-semibold" />
								<div class="rounded-md bg-red-100 p-4">
									<div class="flex">
										<div class="flex-shrink-0">
											<!-- Heroicon name: mini/x-circle -->
											<svg
												class="h-5 w-5 text-red-400"
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
											<h3 class="text-sm font-medium text-red-800">{form.message}</h3>
										</div>
									</div>
								</div>
							{/if}
						</div>

						<div class="flex items-center justify-center">
							<div class="text-sm">
								<a
									href="/password-reset"
									class="font-medium text-center text-fadedBlack hover:text-citrusOrange underline"
									>Forgot your password?</a
								>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="flex justify-center w-full px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-fadedBlack hover:bg-forestGreen focus:outline-none focus:ring-2 focus:ring-fadedBlack focus:ring-offset-2"
								>Sign in</button
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
