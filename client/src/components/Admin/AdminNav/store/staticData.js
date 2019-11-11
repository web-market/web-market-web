import { goods, statistic, category, filter, settings, notification } from '../../../../icons';
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
		link: '/TEST/',
		hasRoute: false,
		items: [
			{
				label: 'Менеджер товаров',
				link: URL.CATALOG.PRODUCT_MANAGER,
				hasRoute: true
			}
		]
	},
	{
		icon: category,
		label: '!!!Категории',
		link: URL.CATEGORY,
		hasRoute: true
	},
	{
		icon: filter,
		label: '!!!Фильтры',
		link: '/TEST/',
		hasRoute: false
	}
];

export const bottomNavItem = [
	{
		icon: settings,
		label: '!!!Настройки',
		link: '/TEST/',
		hasRoute: false
	},
	{
		icon: notification,
		label: '!!!Уведомления',
		link: '/TEST/',
		hasRoute: false
	}
];

export const navProfile = {
	id: 1,
	imgUrl: 'https://avatars3.githubusercontent.com/u/24933076?s=460&v=4',
	userName: 'Bertold von Schwarz'
};
