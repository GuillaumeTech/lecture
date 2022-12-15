import type { Meta, StoryObj } from '@storybook/svelte';

import Recipe from './recipe.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Recipe',
  component: Recipe,
} satisfies Meta<Recipe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'mirepoix',
    ingredients: ['carottes', 'oignon', 'celeri'],
    link:'https://www.marmiton.org/recettes/recette_mirepoix-de-legumes-oublies_64353.aspx',
    image:'https://assets.afcdn.com/recipe/20150831/3146_w640h486c1cx1424cy2105.webp',
    prepTime:'50',
    cookTime:'40',
    restTime:'30'
},
};