import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';

import { AdminNavigationProfile } from './components/AdminNavigationProfile/AdminNavigationProfile';
import { AdminNavigationList } from './components/AdminNavigationList/AdminNavigationList';
import { AdminNavigationBottomItemList } from './components/AdminNavigationBottomItemList/AdminNavigationBottomItemList';

import { parsedLocation } from './utils';
import classNames from 'classnames';
import classes from './styles/index.scss';
import { AdminNavigationCollapsedButton } from '../AdminNavigationCollapsedButton/AdminNavigationCollapsedButton';
import { getBooleanCookie } from '../../utils';

const AdminNavigation = () => {
	const location = useLocation();
	const { root, activeMenu, activeSubMenu } = parsedLocation(location);
	const { isCollapsed } = useContext(NavigationGlobalContext);

	const componentClassName = classNames(
		{
			[classes.adminNavigation_show]: getBooleanCookie(isCollapsed)
		},
		classes.adminNavigation
	);

	return (
		<div className={componentClassName}>
			<AdminNavigationProfile />
			<AdminNavigationList
				activeSubMenu={activeSubMenu}
				activeMenu={`/${root}/${activeMenu}`}
			/>
			<AdminNavigationBottomItemList />
			<AdminNavigationCollapsedButton primaryNavigation />
		</div>
	);
};

export { AdminNavigation };
