import { json } from '@sveltejs/kit';
import { categories } from '$lib/datas/index';

export function GET() {
	return json(categories);
}
