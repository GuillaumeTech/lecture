<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const query = $page.url.searchParams.get('search');

	let photos = [];

	onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});
</script>

<div>hit {query}</div>

<style>
</style>
