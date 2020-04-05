import React from 'react';
import { useLocation } from 'react-router-dom';
import { parsedLocation } from './utils';

import AdminNavigationCollapsedProfile from './components/AdminNavigationCollapsedProfile';
import AdminNavigationCollapsedList from './components/AdminNavigationCollapsedList';
import AdminNavigationCollapsedBottomItemList from './components/AdminNavigationCollapsedBottomItemList';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminNavigationCollapsed = () => {
	const location = useLocation();

	const { root, activeMenu } = parsedLocation(location);

	const componentClassName = classNames(
		classes.adminNav
	);

	return (
		<div className={componentClassName}>
			<AdminNavigationCollapsedProfile />
			<AdminNavigationCollapsedList activeMenu={`/${root}/${activeMenu}`} />
			<AdminNavigationCollapsedBottomItemList />
		</div>
	);
};

export { AdminNavigationCollapsed };
