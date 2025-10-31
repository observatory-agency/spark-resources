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
				<h2 class="mt-6 text-3xl text-fadedBlack text-pretty">Password reset email sent!</h2>
				<p class="mt-2 text-fadedBlack text-pretty">
					Check your inbox and click the link to create a new password
				</p>
			</div>
		</div>
	</div>
	<div class="relative flex-1 hidden w-0 lg:block">
		<img class="absolute inset-0 object-cover w-full h-full" src={signIn} alt="" />
	</div>
</div>
