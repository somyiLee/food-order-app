import { json } from '@sveltejs/kit';
import { categories } from '$lib/data/index';

export function GET() {
	return json(categories);
}
