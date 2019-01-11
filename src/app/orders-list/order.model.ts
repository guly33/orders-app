export class Order {
	constructor(public address: string,
	 			public costumer_id: string,
	 			public email: string,
	 			public order_id: string,
	 			public phone: string,
	 			public products: Array<Product>
	 			) {}
}

export class Product {
	constructor(public id: number,
	 			public name: string,
	 			public description: string,
	 			public cost: string
				) {}
}

