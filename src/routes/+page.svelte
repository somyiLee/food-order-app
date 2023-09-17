<script lang="ts">
	import { moveToProducts } from '$lib/utils';
	import type { MockCategories } from '$lib/types';
	import { categories, categoryOrder } from '$lib/data';

	let categoryList: MockCategories = categories;
</script>

<article>
	<h2 class="screen-out">categories</h2>
	<ul class="categorie-list">
		{#each categoryOrder as category}
			<li>
				<button on:click={() => moveToProducts(categoryList[category].name)}>
					<img src={categoryList[category].picture} alt={categoryList[category].name} />
					<p class="categorie-title">{categoryList[category].name}</p>
				</button>
			</li>
		{/each}
	</ul>
</article>

<style lang="scss">
	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.screen-out {
		overflow: hidden;
		position: absolute;
		width: 0;
		height: 0;
		line-height: 0;
		text-indent: -9999px;
	}
	.categorie-list {
		margin: 100px 50px 50px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 50px;

		li {
			position: relative;
			text-align: center;
			background-color: #fafaf8;
			border-radius: 10px;

			img {
				position: absolute;
				top: -20px;
				left: 50%;
				transform: translate(-50%, 0);
				width: 180px;
				height: 180px;
				object-fit: cover;
				border-radius: 50%;
				overflow: hidden;
				box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
			}

			.categorie-title {
				margin: 190px 0 40px;
				font-size: 28px;
			}
		}
	}
</style>
