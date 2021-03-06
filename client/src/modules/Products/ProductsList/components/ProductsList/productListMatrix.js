import { image } from '../../../../../icons';

export const productListMatrixItemsName = {
	checkbox: 'checkbox',
	image: 'image',
	name: 'name',
	setNumber: 'setNumber',
	inStock: 'inStock',
	price: 'price',
	categories: 'categories',
	date: 'date',
};

export const productListMatrix = [
	{
		label: '',
		icon: '',
		action: null,
		width: 25,
		show: true,
		itemName: productListMatrixItemsName.checkbox,
		displayInTooltip: false
	},
	{
		label: '',
		icon: image,
		action: null,
		width: 75,
		show: true,
		itemName: productListMatrixItemsName.image,
		displayInTooltip: false
	},
	{
		label: '!Название',
		icon: '',
		action: null,
		width: 200,
		show: true,
		itemName: productListMatrixItemsName.name,
		displayInTooltip: false
	},
	{
		label: '!Артикул',
		icon: '',
		action: null,
		width: 120,
		show: false,
		itemName: productListMatrixItemsName.setNumber,
		displayInTooltip: true
	},
	{
		label: '!Остаток',
		icon: '',
		action: null,
		width: 150,
		show: false,
		itemName: productListMatrixItemsName.inStock,
		displayInTooltip: true
	},
	{
		label: '!Цена',
		icon: '',
		action: null,
		width: 100,
		show: true,
		itemName: productListMatrixItemsName.price,
		displayInTooltip: true
	},
	{
		label: '!Категории',
		icon: '',
		action: null,
		width: 250,
		show: true,
		itemName: productListMatrixItemsName.categories,
		displayInTooltip: true
	},
	{
		label: '!Дата',
		icon: '',
		action: null,
		width: 120,
		show: true,
		itemName: productListMatrixItemsName.date,
		displayInTooltip: true
	},
];
