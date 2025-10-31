<script>
	import Logo from '$lib/logo.svg';
	import signIn from '$lib/assets/sign-in.jpg';
	export let form;
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
				<h2 class="mt-6 text-3xl text-fadedBlack">Reset your password</h2>
				<p class="mt-2 text-fadedBlack">
					Enter your user account's verified email address and we will send you a password reset
					link.
				</p>
			</div>

			<div class="mt-8">
				<div class="mt-6">
					<form action="?/reset" method="POST" class="space-y-6">
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
							<button
								type="submit"
								class="flex justify-center w-full px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-fadedBlack hover:bg-forestGreen focus:outline-none focus:ring-2 focus:ring-fadedBlack focus:ring-offset-2"
								>Send password reset email</button
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
