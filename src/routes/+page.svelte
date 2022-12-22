<script lang="ts">
	import { annotate, annotationGroup } from 'rough-notation';
	import type { RoughAnnotationGroup } from 'rough-notation/lib/model';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';

	let annotations: RoughAnnotationGroup;
	onMount(() => {
		const searchInput = annotate(document.querySelector('#search'), {
			type: 'box',
			color: 'orange'
		});
		const searchButton = annotate(document.querySelector('#searchbtn'), {
			type: 'highlight',
			color: 'yellow',
			animate: false
		});
		const inttroText = annotate(document.querySelector('#intro'), {
			type: 'circle',
			color: 'black',
			animate: false
		});

		annotations = annotationGroup([searchInput, inttroText, searchButton]);
		annotations.show();
	});

	onDestroy(() => {
		if (annotations) {
			annotations.hide();
		}
	});

	let search = '';
	let type = 'recipes';

	function onSearch() {
		goto(`/results?search=${search}&type=${type}`, { replaceState: false });
	}
</script>

<p id="intro">Cherches une recette par titre ou en listant les ingrédients séparé d'un espace</p>
<div id="searchbloc">
	<h1>Le Livre</h1>

	<input type="search" bind:value={search} id="search" placeholder="Recherche une recette" />
	<button id="searchbtn" on:click={onSearch}> Rechercher </button>

	<label>
		<input type="radio" bind:group={type} name="type" value={'ingredients'} />
		Search Ingredients
	</label>

	<label>
		<input type="radio" bind:group={type} name="type" value={'recipes'} />
		Search Recipes
	</label>
</div>

<style>
	#intro {
		position: relative;
		top: 12rem;
		left: 50%;
		width: 20rem;
		rotate: 2deg;
	}
	#searchbloc {
		margin: auto;
		width: fit-content;
	}
	#search {
		font-size: 1.5em;
		border: 0;
		width: fit-content;
	}
	#search:focus {
		outline: none;
	}
	#searchbtn {
		margin-left: 1rem;
		font-size: 1.5em;
		background-color: transparent;
		cursor: pointer;
		overflow: hidden;
	}
</style>
