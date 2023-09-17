export async function load({ fetch }) {
	const res = await fetch('./apis/categories');
	const data = await res.json();
	return { data: data };
}
