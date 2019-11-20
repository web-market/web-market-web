import { bell, chartBar, th, filter, settings, alignJustify } from '../../../../icons';
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
		menuRoute: URL.CATALOG.ROOT,
		items: [
			{
				label: 'Менеджер товаров',
				link: URL.CATALOG.PRODUCT_MANAGER,
				hasRoute: true
			},
			{
				label: 'Топ продаж',
				link: URL.CATALOG.TOP_SALE,
				hasRoute: true
			},
			{
				label: 'Зубы анархиста',
				link: URL.CATALOG.ANARCHY_TOOTH,
				hasRoute: true
			}
		]
	},
	{
		icon: th,
		label: '!!!Категории',
		link: URL.CATEGORY,
		hasRoute: true,
	},
	{
		icon: filter,
		label: '!!!Фильтры',
		link: '/TEST/',
		hasRoute: true,
		menuRoute: URL.FILTERS.ROOT,
		items: [
			{
				label: 'qweqweqwe',
				link: URL.FILTERS.PRODUCT_MANAGER,
				hasRoute: true
			},
			{
				label: 'qwewqe',
				link: URL.FILTERS.TOP_SALE,
				hasRoute: true
			}
		]
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
		icon: bell,
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
