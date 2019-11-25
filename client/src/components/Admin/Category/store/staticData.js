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
		childCategories: [
			{
				id: 2,
				name: '!Футболки',
				parentCategoryId: 1,
				isActive: true,
				sortOrder: 0,
				childCategories: [
					{
						id: 21,
						name: '!Футболки с принтами',
						parentCategoryId: 2,
						isActive: true,
						sortOrder: 0,
						childCategories: []
					},
					{
						id: 22,
						name: '!Футболки Marvel',
						parentCategoryId: 2,
						isActive: true,
						sortOrder: 0,
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
				childCategories: [
					{
						id: 31,
						name: '!Свитшоты с принтами',
						parentCategoryId: 3,
						isActive: true,
						sortOrder: 0,
						childCategories: []
					},
					{
						id: 32,
						name: '!Свитшоты DC',
						parentCategoryId: 3,
						isActive: true,
						sortOrder: 0,
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
		childCategories: [
			{
				id: 51,
				name: '!Футболки Для нее',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
				childCategories: []
			},
			{
				id: 52,
				name: '!Юбки',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
				childCategories: []
			},
			{
				id: 53,
				name: '!Шорты',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
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
		childCategories: [
			{
				id: 91,
				name: '!Осенняя распродажа',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
				childCategories: []
			},
			{
				id: 92,
				name: '!Лови скидки',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
				childCategories: []
			}
		]
	}
];
