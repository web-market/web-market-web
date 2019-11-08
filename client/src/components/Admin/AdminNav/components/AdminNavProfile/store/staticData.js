import { userProfile } from '../../../../../../icons';
import { URL } from '../../../../consts';

export const profileItem = [
	{
		icon: userProfile,
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
