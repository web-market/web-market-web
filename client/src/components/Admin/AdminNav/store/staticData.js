import { goods, statistic, category, filter, settings, notification } from '../../../../icons/icons';
import { URL } from '../../consts';

export const mainNavItem = [
	{
		icon: statistic,
		label: '!!!Статистика',
		link: '/adminpanel/statistic/',
		hasRoute: true
	},
	{
		icon: goods,
		label: '!!!Каталог',
		items: [
			{
				label: '!!!Менеджер товаров',
				link: '/adminpanel/catalog/',
				hasRoute: true
			},
			{
				label: '!!!Категории',
				link: URL.CATALOG.CATEGORY,
				hasRoute: true
			},
			{
				label: '!!!Фильтры',
				link: '/adminpanel/filters/',
				hasRoute: true
			},
		]
	},
	{
		icon: category,
		label: '!!!Категории'
	},
	{
		icon: filter,
		label: '!!!Фильтры'
	}
];

export const bottomNavItem = [
	{
		icon: settings,
		label: '!!!Настройки'
	},
	{
		icon: notification,
		label: '!!!Уведомления'
	}
];

export const navProfile = {
	id: 1,
	imgUrl: 'https://avatars3.githubusercontent.com/u/24933076?s=460&v=4',
	userName: 'Bertold von Schwarz'
};
