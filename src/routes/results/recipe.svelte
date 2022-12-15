<script lang="ts">
	export let ingredients: Array<string> = [];
	export let title: string;
	export let link: string;
	export let imageLink: string = '';
	export let prepTime: string = '';
	export let cookTime: string = '';
	export let restTime: string = '';

	const total = parseInt(cookTime) + parseInt(restTime) + parseInt(cookTime);
</script>

<div class="recipe">
	<img height="150" src={imageLink} />
	<div class="recipe-info">
		<a href={link}>{title}</a>
		<ul class="inline-list timings">
			<li>Préparation: {prepTime} min,</li>
			<li>Cuisson: {cookTime} min,</li>
			<li>Repos: {restTime} min</li>
		</ul>
		<p>Total: {total} minutes</p>
		<ul class="inline-list ingredients">
			{#each ingredients as ingredient}
				<li class="ingredient">{ingredient}</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="less">
	.recipe {
		display: flex;
		flex-flow: row nowrap;
	}
	.recipe-info {
		margin-left: 1rem;
		a {
			font-size: 1.5rem;
		}
		.inline-list {
			padding-inline: 0;
			&.timings {
				li {
					margin-right: 0.3rem;
				}
			}
			li {
				&.ingredient {
					background-color: paleturquoise;
					margin-right: 0.3rem;
					padding: 0.1rem 0.3rem 0.1rem 0.3rem;
				}
				display: inline;
			}
		}
	}
</style>
