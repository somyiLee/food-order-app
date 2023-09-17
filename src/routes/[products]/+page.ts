export async function load({ fetch }) {
	const res = await fetch('../apis/products');
	const data = await res.json();
	return { data: data };
}
