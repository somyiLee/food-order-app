<script lang="ts">
	import { PrevIcon } from '../../lib/assets';
	import { useNavigate } from '$lib/hooks/useNavigate';
	import { page } from '$app/stores';
	import type { MockProduct } from '../../types';
	const id = $page.params.products;
	const products = {
		appetizer01: {
			description: 'Romain lettuce and croutons with caesar dressing.',
			id: 'appetizer01',
			name: 'Caesar Salad',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1000
		},
		appetizer02: {
			description: 'Green Salad.',
			id: 'appetizer02',
			name: 'Green Salad',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1000
		},
		appetizer03: {
			description: 'Caprese Salad.',
			id: 'appetizer03',
			name: 'Caprese Salad',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1300
		},
		appetizer04: {
			description: '',
			id: 'appetizer04',
			name: 'Calamari',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1200
		},
		appetizer05: {
			description: '',
			id: 'appetizer05',
			name: 'French Fries',
			picture: 'https://picsum.photos/300/200.webp',
			price: 800
		},
		appetizer06: {
			description: '',
			id: 'appetizer06',
			name: 'Cheese Stick',
			price: 700
		},

		meatPasta01: {
			description:
				'Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce.',
			id: 'meatPasta01',
			name: 'Carbonara',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1700
		},
		meatPasta02: {
			description: '',
			id: 'meatPasta02',
			name: 'Bolognese',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1700
		},
		meatPasta03: {
			description: '',
			id: 'meatPasta03',
			name: 'Polpettine',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1700
		},
		meatPasta04: {
			description: 'Bacon and egg yolk with spaghetti in a cream sauce.',
			id: 'meatPasta04',
			name: 'Salscicie',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1700
		},
		meatPasta05: {
			description: '',
			id: 'meatPasta05',
			name: 'Rose Forno',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1900
		},
		meatPasta06: {
			description: '',
			id: 'meatPasta06',
			name: 'Beef Soy Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1750
		},
		meatPasta07: {
			description: '',
			id: 'meatPasta07',
			name: 'Beef Rose Pasta',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1800
		},
		meatPasta08: {
			description: '',
			id: 'meatPasta08',
			name: 'Meat Lover',
			picture: 'https://picsum.photos/300/200.webp',
			price: 1850
		},

		wine01: {
			description: '',
			id: 'wine01',
			name: 'House Wine (Red)',
			picture: 'https://picsum.photos/300/200.webp',
			price: 800
		},
		wine02: {
			description: '',
			id: 'wine02',
			name: 'House Wine (White)',
			picture: 'https://picsum.photos/300/200.webp',
			price: 800
		},
		wine03: {
			description: '',
			id: 'wine03',
			name: 'Bottle Wine (Red)',
			picture: 'https://picsum.photos/300/200.webp',
			price: 6200
		},
		wine04: {
			description: '',
			id: 'wine04',
			name: 'Bottle Wine (Red)',
			picture: 'https://picsum.photos/300/200.webp',
			price: 6200
		}
	};

	const productList: MockProduct[] = Object.entries(products)
		.filter(([key, value]) => key.toLowerCase().includes(id.toLowerCase().slice(0, -1)))
		.map(([key, value]) => value);

	const formatToDollar = (price: number) => {
		return (price / 100).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
	};
</script>

<article class="products-container">
	<header class="products-header">
		<button on:click={() => useNavigate('/')}><img src={PrevIcon} alt="이전으로" /></button>
		<h3 class="category-title">{id}</h3>
		{#if id === 'Appetizers'}
			<p class="category-subtitle">Salad an fries</p>
		{/if}
	</header>
	<section>
		{#if productList.length < 1}
			<p>주문 가능한 상품이 없습니다.</p>
		{/if}
		<ul class="products-list">
			{#each productList as product}
				<li>
					<div class="thumnail-box">
						{#if !product.picture}
							<p>{product.name}</p>
						{:else}
							<img src={product.picture} alt={product.name} />
						{/if}
					</div>
					<p class="product-name">{product.name}</p>
					<span class="product-price">{formatToDollar(product.price)}</span>
				</li>
			{/each}
		</ul>
	</section>
</article>

<style lang="scss">
	.products-container {
		margin: 80px 30px 50px;

		.products-header {
			display: flex;
			align-items: center;
			margin-bottom: 30px;

			button {
				padding: 20px 32px;
				margin-right: 50px;
				background-color: white;
				border: none;
				border-radius: 10px;
				box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.2);
				cursor: pointer;

				img {
					width: 20px;
				}
			}

			.category-title {
				display: inline-block;
				margin-right: 70px;
				font-size: 42px;
				font-weight: 500;
				line-height: 1;
			}

			.category-subtitle {
				font-size: 24px;
				color: #656362;
			}
		}

		.products-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 30px;

			li {
				width: 100;
				text-align: center;
				cursor: pointer;

				.thumnail-box {
					width: 100%;
					height: 270px;
					overflow: hidden;
					background-color: #e7e6e4;
					border-radius: 10px;

					p {
						padding: 20px 0 0 20px;
						text-align: left;
						color: white;
						font-size: 35px;
						font-weight: 800;
						letter-spacing: 1px;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.product-name {
					margin: 25px 0 15px;
					font-size: 24px;
				}

				.product-price {
					font-size: 20px;
					color: #545452;
				}
			}
		}
	}
</style>
