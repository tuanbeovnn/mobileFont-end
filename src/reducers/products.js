var initialState = [
	{
		id: 1,
		name: 'Iphone 7 Plus',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 500,
		inventory: 10,
		rating : 1
	},
	{
		id: 2,
		name: 'Iphone 8 Plus',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 300,
		inventory: 10,
		rating : 2
	},
	{
		id: 3,
		name: 'Iphone 11 Plus',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 200,
		inventory: 10,
		rating : 4
	},
	{
		id: 4,
		name: 'Iphone 5',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 200,
		inventory: 10,
		rating : 1
	},
	{
		id: 5,
		name: 'Iphone 3',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 200,
		inventory: 10,
		rating : 3
	},
	{
		id: 6,
		name: 'Iphone SE',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-silver?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299535012',
		description: 'Us',
		price: 200,
		inventory: 10,
		rating : 4
	},
];

const products = (state = initialState, action ) =>{
	switch (action.type) {
		default: return state;
	}
}

export default products;