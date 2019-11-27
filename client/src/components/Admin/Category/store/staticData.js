import { actions as actionName } from '../consts';
import { plus } from '../../../../icons';

export const actions = [
	{
		actionName: actionName.ADD_CATEGORY,
		icon: plus,
		type: 'primary',
		transparent: true
	}
];

export const categories = [
	{
		id: 1,
		name: '!Для него',
		parentCategoryId: 0,
		isActive: true,
		sortOrder: 0,
		color: '#33cabb',
		childCategories: [
			{
				id: 2,
				name: '!Футболки',
				parentCategoryId: 1,
				isActive: true,
				sortOrder: 0,
				color: '#ca1922',
				childCategories: [
					{
						id: 21,
						name: '!Футболки с принтами',
						parentCategoryId: 2,
						isActive: true,
						sortOrder: 0,
						color: '#ca860e',
						childCategories: []
					},
					{
						id: 22,
						name: '!Футболки Marvel',
						parentCategoryId: 2,
						isActive: true,
						sortOrder: 0,
						color: '#3554ca',
						childCategories: [
							{
								id: 221,
								name: '!Футболки с принтами!!!',
								parentCategoryId: 22,
								isActive: true,
								sortOrder: 0,
								childCategories: []
							},
							{
								id: 222,
								name: '!Футболки DC!!!!',
								parentCategoryId: 22,
								isActive: true,
								sortOrder: 0,
								color: '#ca0071',
								childCategories: []
							},
						]
					},
				]
			},
			{
				id: 3,
				name: '!Свитшоты',
				parentCategoryId: 1,
				isActive: true,
				sortOrder: 0,
				color: '#1969ca',
				childCategories: [
					{
						id: 31,
						name: '!Свитшоты с принтами',
						parentCategoryId: 3,
						isActive: true,
						sortOrder: 0,
						color: '#cac843',
						childCategories: []
					},
					{
						id: 32,
						name: '!Свитшоты DC',
						parentCategoryId: 3,
						isActive: true,
						sortOrder: 0,
						color: '#ca7518',
						childCategories: []
					},
				]
			},
			{
				id: 4,
				name: '!Брюки',
				parentCategoryId: 1,
				isActive: true,
				sortOrder: 0,
				color: '#ca0820',
				childCategories: []
			}
		]
	},
	{
		id: 5,
		name: '!Для нее',
		parentCategoryId: 0,
		isActive: true,
		sortOrder: 0,
		color: '#ca540d',
		childCategories: [
			{
				id: 51,
				name: '!Футболки Для нее',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
				color: '#1949ca',
				childCategories: []
			},
			{
				id: 52,
				name: '!Юбки',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
				color: '#ca23a5',
				childCategories: []
			},
			{
				id: 53,
				name: '!Шорты',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
				color: '#30ca24',
				childCategories: []
			}
		]
	},
	{
		id: 9,
		name: '!Акции',
		parentCategoryId: 0,
		isActive: true,
		sortOrder: 0,
		color: '#363eca',
		childCategories: [
			{
				id: 91,
				name: '!Осенняя распродажа',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
				color: '#b7ca45',
				childCategories: []
			},
			{
				id: 92,
				name: '!Лови скидки',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
				color: '#ca635f',
				childCategories: []
			}
		]
	}
];
