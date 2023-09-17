export async function load({ fetch }) {
	const res = await fetch('../api/products');
	const data = await res.json();
	return { data: data };
}
