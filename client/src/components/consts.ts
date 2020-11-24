import { bell, chartBar, th, filter, settings, tiPackage, image, viewList } from '../icons';

export const URL = {
	USER_PROFILE: '/adminpanel/userprofile',
	STATISTIC: '/adminpanel/statistic',
	CATALOG: {
		ROOT: '/adminpanel/catalog',
		PRODUCT_MANAGER: '/adminpanel/catalog/products-manager',
		CREATE_PRODUCT: '/adminpanel/catalog/create-product',
	},
    STORE: {
        ROOT: '/adminpanel/store',
        MANUFACTURES: '/adminpanel/store/manufactures-list',
        STORES: '/adminpanel/store/stores-list',
        RAW_PRODUCT: '/adminpanel/store/raw-products-list'
    },
    SUPPLY: {
        SUPPLY_LIST: '/adminpanel/supply/supplies-list',
        ADD_SUPPLY: '/adminpanel/supply/add-supply',
        SUPPLY_DETAIL_ID: '/adminpanel/supply/supply-detail/:supplyId',
        SUPPLY_DETAIL: '/adminpanel/supply/supply-detail',
    },
    STORE_DETAIL: {
        ID: '/adminpanel/store/store-detail/:storeId',
        DETAIL: '/adminpanel/store/store-detail',
    },
	CATEGORY: {
		ROOT: '/adminpanel/categories'
	},
	FILTERS: {
		ROOT: '/adminpanel/filters',
	},
	MEDIA: {
		ROOT: '/adminpanel/media',
		PRODUCTS: '/adminpanel/media/products',
		PRODUCTS_CATEGORY: '/adminpanel/media/products/category',
		OTHER: '/adminpanel/media/other'
	}
};

export const mainNavItem = [
	{
		icon: chartBar,
		label: '!!!Статистика',
		link: URL.STATISTIC,
		hasRoute: true
	},
	{
		icon: viewList,
		label: '!!!Каталог',
		hasRoute: true,
		menuRoute: URL.CATALOG.ROOT,
		items: [
			{
				label: 'Менеджер товаров',
				link: URL.CATALOG.PRODUCT_MANAGER,
				hasRoute: true
			}
		]
	},
    {
        icon: tiPackage,
        label: '!!!Склад',
        menuRoute: URL.STORE.ROOT,
        hasRoute: true,
        items: [
            {
                label: '!!Поставки',
                link: URL.SUPPLY.SUPPLY_LIST,
                hasRoute: true
            },
            {
                label: '!!Производители',
                link: URL.STORE.MANUFACTURES,
                hasRoute: true
            },
            {
                label: '!!Склады',
                link: URL.STORE.STORES,
                hasRoute: true
            },
            {
                label: '!!Типовый товар',
                link: URL.STORE.RAW_PRODUCT,
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
		menuRoute: URL.MEDIA.ROOT,
		items: [
			{
				label: '!Изображения товаров',
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
