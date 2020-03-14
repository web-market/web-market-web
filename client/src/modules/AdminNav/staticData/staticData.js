import { bell, chartBar, th, filter, settings, alignJustify, image } from '../../../icons';
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
			}
		]
	},
	{
		icon: th,
		label: '!!!Категории',
		link: URL.CATEGORY.ROOT,
		hasRoute: true,
	},
	{
		icon: filter,
		label: '!!!Фильтры',
		link: URL.FILTERS.ROOT,
		hasRoute: true,
	},
	{
		icon: image,
		hasRoute: true,
		label: '!!!Медиа',
		link: URL.MEDIA.ROOT,
		menuRoute: URL.MEDIA.ROOT,
		items: [
			{
				label: '!Товары',
				link: URL.MEDIA.PRODUCTS,
				hasRoute: true
			},
			{
				label: '!Другое',
				link: URL.MEDIA.OTHER,
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
		hasRoute: true,
	}
];

export const navProfile = {
	id: 1,
	imgUrl: 'https://avatars3.githubusercontent.com/u/24933076?s=460&v=4',
	userName: 'Bertold von Schwarz'
};
