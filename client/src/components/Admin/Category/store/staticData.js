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
						id: 12,
						name: '!Футболки с принтами',
						parentCategoryId: 1,
						isActive: true,
						sortOrder: 0,
					},
					{
						id: 13,
						name: '!Футболки Marvel',
						parentCategoryId: 1,
						isActive: true,
						sortOrder: 0,
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
						id: 12,
						name: '!Свитшоты с принтами',
						parentCategoryId: 1,
						isActive: true,
						sortOrder: 0,
					},
					{
						id: 13,
						name: '!Свитшоты DC',
						parentCategoryId: 1,
						isActive: true,
						sortOrder: 0,
					},
				]
			},
			{
				id: 4,
				name: '!Брюки',
				parentCategoryId: 1,
				isActive: true,
				sortOrder: 0,
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
				id: 6,
				name: '!Футболки Для нее',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
			},
			{
				id: 7,
				name: '!Юбки',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
			},
			{
				id: 8,
				name: '!Шорты',
				parentCategoryId: 5,
				isActive: true,
				sortOrder: 0,
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
				id: 10,
				name: '!Осенняя распродажа',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
			},
			{
				id: 11,
				name: '!Лови скидки',
				parentCategoryId: 9,
				isActive: true,
				sortOrder: 0,
			}
		]
	}
];
