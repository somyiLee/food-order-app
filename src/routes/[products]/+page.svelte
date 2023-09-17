<script lang="ts">
	import { page } from '$app/stores';
	import { useNavigate } from '$lib/hooks/useNavigate';
	import { filterProductById, formatToDollar } from '$lib/utils';
	import type { MockProduct } from '$lib/types';
	import { PrevIcon } from '$lib/assets';
	export let data;

	const products = data.data;
	const id = $page.params.products;
	const productList: MockProduct[] = filterProductById<MockProduct>(products, id);
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
