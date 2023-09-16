<script lang="ts">
	import 'reset-css';
	import { NotificationIcon, ReceiptIcon, CartIcon, TableIcon } from '../lib/assets/index';

	const languages = [{ name: 'English' }, { name: '한국어' }];
	const tableNumber = '12';
</script>

<header>
	<nav>
		<ul class="nav-list">
			<li>
				<select class="select-languge">
					{#each languages as language}
						<option value={language.name}>{language.name}</option>
					{/each}
				</select>
			</li>
			<li>
				<button>
					<img src={NotificationIcon} alt="table" />
					Call Waiter
				</button>
			</li>
			<li>
				<button disabled={true}>
					<img src={ReceiptIcon} alt="table" />
					View Bill
				</button>
			</li>
			<li>
				<button disabled={true}>
					<img src={CartIcon} alt="table" />
					My Cart
				</button>
			</li>
			<li>
				<button class="table-number">
					<img src={TableIcon} alt="table" />
					{tableNumber}
				</button>
			</li>
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
	}
	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}

	.nav-list {
		background-color: #24201f;
		display: flex;
		justify-content: space-between;
		align-items: center;

		li {
			width: 20%;
			text-align: center;
			border-right: 1px solid #858585;
			height: 50px;

			&:last-child {
				border-right: none;
			}

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10px;
				width: 100%;
				height: 50px;
				color: white;
				font-size: 22px;

				&:disabled {
					color: #858585;
					cursor: not-allowed;
				}

				img {
					width: 25px;
				}
			}

			.table-number {
				font-size: 28px;
			}
		}
	}

	.select-languge {
		width: 100%;
		height: 50px;
		padding-left: 20px;
		background: url('../lib/assets/chevron-down.png') calc(100% - 20px) no-repeat;
		background-color: #24201f;

		outline: none;
		border: none;
		color: white;
		font-size: 20px;
		appearance: none;

		option {
			background: #333;
			color: #fff;
		}
	}
</style>
