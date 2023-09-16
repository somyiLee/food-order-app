<script lang="ts">
	import type { MockCategories } from '../types';
	const categoryOrder = [
		'mockCategory01',
		'mockCategory02',
		'mockCategory03',
		'mockCategory04',
		'mockCategory05',
		'mockCategory06',
		'mockCategory07',
		'mockCategory08',
		'mockCategory09',
		'mockCategory10',
		'mockCategory11',
		'mockCategory12',
		'mockCategory13',
		'mockCategory14',
		'mockCategory15',
		'mockCategory16'
	];

	const categories: MockCategories = {
		mockCategory01: {
			description: 'Salad and fries',
			id: 'mockCategory01',
			name: 'Appetizers',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: [
				'appetizer01',
				'appetizer02',
				'appetizer03',
				'appetizer04',
				'appetizer05',
				'appetizer06'
			]
		},
		mockCategory02: {
			id: 'mockCategory02',
			name: 'Meat Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: [
				'meatPasta01',
				'meatPasta02',
				'meatPasta03',
				'meatPasta04',
				'meatPasta05',
				'meatPasta06',
				'meatPasta07',
				'meatPasta08'
			]
		},
		mockCategory03: {
			id: 'mockCategory03',
			name: 'Wine',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: ['wine01', 'wine02', 'wine03', 'wine04']
		},
		mockCategory04: {
			id: 'mockCategory04',
			name: 'Lunch Menu',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: ['appetizer01', 'meatPasta01', 'meatPasta06', 'wine01']
		},
		mockCategory05: {
			id: 'mockCategory05',
			name: 'Vegetarian Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: ['appetizer04', 'appetizer05']
		},
		mockCategory06: {
			id: 'mockCategory06',
			name: 'Special Menu',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: ['wine02', 'wine03']
		},
		mockCategory07: {
			id: 'mockCategory07',
			name: `Kid's Menu`,
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: ['appetizer01', 'meatPasta05', 'meatPasta06', 'meatPasta07', 'meatPasta08']
		},
		mockCategory08: {
			id: 'mockCategory08',
			name: 'Beverages',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory09: {
			id: 'mockCategory09',
			name: 'Pizza',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory10: {
			id: 'mockCategory10',
			name: 'Steak',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory11: {
			id: 'mockCategory11',
			name: 'Chicken Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory12: {
			id: 'mockCategory12',
			name: 'Seafood Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory13: {
			id: 'mockCategory13',
			name: 'Take Out Only',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory14: {
			id: 'mockCategory14',
			name: 'Spicy',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory15: {
			id: 'mockCategory15',
			name: 'Beer',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		},
		mockCategory16: {
			id: 'mockCategory16',
			name: 'Dessert',
			picture: 'https://picsum.photos/300/200.webp',
			productOrder: []
		}
	};
</script>

<main>
	<article>
		<h2 class="screen-out">categories</h2>
		<ul class="categorie-list">
			{#each categoryOrder as categorie}
				<li>
					<img src={categories[categorie].picture} alt={categories[categorie].name} />
					<p class="categorie-title">{categories[categorie].name}</p>
				</li>
			{/each}
		</ul>
	</article>
</main>

<style lang="scss">
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
