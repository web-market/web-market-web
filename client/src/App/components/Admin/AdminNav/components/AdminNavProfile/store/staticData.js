import { userProfile } from "../../../../../../icons/icons";

export const profileItem = [
	{
		icon: userProfile,
		label: '!!!Профиль',
		link: '/adminpanel/userprofile/',
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
