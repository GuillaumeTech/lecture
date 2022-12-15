<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Recipe from './recipe.svelte';

	const query = $page.url.searchParams.get('search');

	let recipes: Array<any> = [];

	onMount(async () => {
		const res = await fetch(`http://127.0.0.1:8000/recipes/search/?term=${query}`);

		recipes = await res.json();
	});
</script>

<div>
	{#each recipes as recipe}
		<div class="recipe-container">
			<Recipe
				title={recipe.title}
				ingredients={recipe.ingredients}
				link={recipe.link}
				image={recipe.image}
				prepTime={recipe.prep_time}
				cookTime={recipe.cook_time}
				restTime={recipe.rest_time}
			/>
		</div>
	{/each}
</div>

<style lang="less">
	.recipe-container {
		margin-top: 1rem;
	}
</style>
