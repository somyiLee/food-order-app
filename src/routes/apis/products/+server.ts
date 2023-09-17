import { json } from '@sveltejs/kit';
import { products } from '$lib/datas/index';

export function GET() {
	return json(products);
}
