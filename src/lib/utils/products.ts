const formatToDollar = (price: number) => {
	return (price / 100).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
};

const filterProductById = <T>(products: Record<string, T>, id: string): T[] => {
	return Object.entries(products)
		.filter(([key]) => key.toLowerCase().includes(id.toLowerCase().slice(0, -1)))
		.map(([, value]) => value);
};
export { formatToDollar, filterProductById };
