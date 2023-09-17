export async function load({ fetch }) {
	const res = await fetch('./api/categories');
	const data = await res.json();
	return { data: data };
}
