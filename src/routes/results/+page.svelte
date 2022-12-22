<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Recipe from './recipe.svelte';
	const recipeRoute = 'http://127.0.0.1:8000/search/recipes/?term=';
	const ingredientsRoute = 'http://127.0.0.1:8000/search/ingredients/?terms=';

	const query = $page.url.searchParams.get('search');
	const type = $page.url.searchParams.get('type');

	let recipes: Array<any> = [];

	onMount(async () => {
		let url = '';
		switch (type) {
			case 'recipes':
				url = recipeRoute;
				break;
			case 'ingredients':
				url = ingredientsRoute;
				break;
			default:
				throw new Error('No search type');
		}

		const res = await fetch(`${url}${query}`);

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
