import { json } from '@sveltejs/kit';
import { products } from '$lib/data/index';

export function GET() {
	return json(products);
}
