<script>
	import { page } from '$app/stores';

	const query = $page.url.searchParams.get('search');
</script>

<div>hit {query}</div>

<style>
</style>
