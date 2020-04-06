import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';

import AdminNavigationProfile from './components/AdminNavigationProfile';
import AdminNavigationList from './components/AdminNavigationList';
import AdminNavigationBottomItemList from './components/AdminNavigationBottomItemList';

import { parsedLocation } from './utils';
import classNames from 'classnames';
import classes from './styles/index.scss';
import AdminNavigationCollapsedButton from '../AdminNavigationCollapsedButton/AdminNavigationCollapsedButton';

const AdminNavigation = () => {
	const location = useLocation();
	const { root, activeMenu } = parsedLocation(location);
	const { isCollapsed } = useContext(NavigationGlobalContext);

	const componentClassName = classNames(
		{
			[classes.adminNavigation_show]: isCollapsed === 'true'
		},
		classes.adminNavigation
	);

	return (
		<div className={componentClassName}>
			<AdminNavigationProfile />
			<AdminNavigationList activeMenu={`/${root}/${activeMenu}`} />
			<AdminNavigationBottomItemList />
			<AdminNavigationCollapsedButton primaryNavigation />
		</div>
	);
};

export { AdminNavigation };