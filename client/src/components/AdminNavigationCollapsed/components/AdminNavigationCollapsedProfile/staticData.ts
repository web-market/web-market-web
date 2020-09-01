import { chevronLeft } from '../../../../icons';
import { URL } from '../../../consts';

export const profileItem = [
	{
		icon: chevronLeft,
		label: '!!!Профиль',
		link: URL.USER_PROFILE,
		hasRoute: true
	},
	{
		label: '!!!Магазин',
		link: 'https://morningstar.com.ua/',
		hasRoute: false
	},
	{
		label: '!!!Выход',
		link: '/user/logout',
		hasRoute: false
	}
];
