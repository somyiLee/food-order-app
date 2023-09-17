import { categories, categoryOrder } from './data';

export function load() {
	return {
		categories: categories,
		categoryOrder: categoryOrder
	};
}
