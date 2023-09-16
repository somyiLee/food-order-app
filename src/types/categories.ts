export interface MockCategories {
	[key: string]: {
		description?: string;
		id: string;
		name: string;
		picture: string;
		productOrder: string[];
	};
}

export interface MockProduct {
	description: string;
	id: string;
	name: string;
	picture?: string;
	price: number;
}
