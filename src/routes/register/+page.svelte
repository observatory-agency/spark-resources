<script>
	import Logo from '$lib/logo.svg';
	export let form;
</script>

<svelte:head>
	<title>Create an account | Spark Resources</title>
</svelte:head>
<div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<a href="/">
			<img src={Logo} alt="Spark Strategies logo" class="w-16 mx-auto" />
		</a>
		<h2 class="mt-6 text-3xl text-center text-fadedBlack">Create your account</h2>
		<p class="mt-2 text-center text-fadedBlack">
			Already a member?
			<a href="/login" class="font-medium text-fadedBlack hover:text-citrusOrange underline">
				Sign in</a
			>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-neonGreen rounded-xl">
		<div class="px-4 py-8 shadow-lg sm:px-10 rounded-xl">
			<form class="space-y-6" action="?/register" method="POST">
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

				<div>
					<label for="password" class="block font-medium text-fadedBlack">Password</label>
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
						<p class="text-red-600 font-semibold" />
						<div class="rounded-md bg-red-50 p-4 mt-3">
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
									<h3 class="font-medium text-red-800">{form.fuck}</h3>
								</div>
							</div>
						</div>
					{/if}
				</div>

				<div>
					<button
						type="submit"
						class="flex justify-center w-full px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-fadedBlack hover:bg-forestGreen focus:outline-none focus:ring-2 focus:ring-fadedBlack focus:ring-offset-2"
						>Create account</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
