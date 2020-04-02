import React from 'react';
import { useLocation } from 'react-router-dom';
import { parsedLocation } from './utils';

import AdminNavigationProfile from './components/AdminNavigationProfile';
import AdminNavigationList from './components/AdminNavigationList';
import AdminNavigationBottomItemList from './components/AdminNavigationBottomItemList';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminNavigation = () => {
	const location = useLocation();

	const { root, activeMenu } = parsedLocation(location);

	const componentClassName = classNames(
		classes.adminNav
	);

	return (
		<div className={componentClassName}>
			<AdminNavigationProfile />
			<AdminNavigationList activeMenu={`/${root}/${activeMenu}`} />
			<AdminNavigationBottomItemList />
		</div>
	);
};

export { AdminNavigation };
