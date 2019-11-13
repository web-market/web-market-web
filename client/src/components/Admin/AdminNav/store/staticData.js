import { chevronDown, chartBar, th, filter, settings, alignJustify } from '../../../../icons';
import { URL } from '../../consts';

export const mainNavItem = [
	{
		icon: chartBar,
		label: '!!!Статистика',
		link: '/adminpanel/statistic/',
		hasRoute: true
	},
	{
		icon: alignJustify,
		label: '!!!Каталог',
		link: '/TEST/',
		hasRoute: true,
		items: [
			{
				label: 'Менеджер товаров',
				link: URL.CATALOG.PRODUCT_MANAGER,
				hasRoute: true
			}
		]
	},
	{
		icon: th,
		label: '!!!Категории',
		link: URL.CATEGORY,
		hasRoute: true
	},
	{
		icon: filter,
		label: '!!!Фильтры',
		link: '/TEST/',
		hasRoute: true
	}
];

export const bottomNavItem = [
	{
		icon: settings,
		label: '!!!Настройки',
		link: '/TEST/',
		hasRoute: true
	},
	{
		icon: chevronDown,
		label: '!!!Уведомления',
		link: '/TEST/',
		hasRoute: true
	}
];

export const navProfile = {
	id: 1,
	imgUrl: 'https://avatars3.githubusercontent.com/u/24933076?s=460&v=4',
	userName: 'Bertold von Schwarz'
};
