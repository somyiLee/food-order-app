import { useNavigate } from '$lib/hooks/useNavigate';
let categoryId = '';

const moveToProducts = (id: string) => {
	categoryId = id.replace(/\s+/g, '');
	useNavigate(`/${categoryId}`);
};

export { moveToProducts, categoryId };
