<script>
	import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../styles.css';

	export let data;

	$: ({ session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_event, session) => {
			if (session?.expires_at !== data?.session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>Spark Knowledge with our Resource Center | Spark Strategies</title>
	<meta
		name="description"
		content="Spark Knowledge with our Resource Center! We continually update our Resource Center with spreadsheets, guides, templates and videos to keep your business running smoothly."
	/>
</svelte:head>

<main class="h-full bg-warmWhite">
	<slot />
</main>
