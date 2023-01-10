<script>
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import '../styles.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
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

<main class="h-full bg-sparkPeach">
	<slot />
</main>
