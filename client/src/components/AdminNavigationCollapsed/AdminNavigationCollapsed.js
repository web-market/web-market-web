import React, { useContext } from 'react';
import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';

import { useLocation } from 'react-router-dom';
import { parsedLocation } from './utils';

import AdminNavigationCollapsedProfile from './components/AdminNavigationCollapsedProfile';
import AdminNavigationCollapsedList from './components/AdminNavigationCollapsedList';
import AdminNavigationCollapsedBottomItemList from './components/AdminNavigationCollapsedBottomItemList';
import AdminNavigationCollapsedButton from '../AdminNavigationCollapsedButton/AdminNavigationCollapsedButton';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminNavigationCollapsed = () => {
	const location = useLocation();
	const { isCollapsed } = useContext(NavigationGlobalContext);

	const { root, activeMenu } = parsedLocation(location);

	const componentClassName = classNames(
		{
			[classes.adminNavigationCollapsed_show]: isCollapsed
		},
		classes.adminNavigationCollapsed
	);

	return (
		<div className={componentClassName}>
			<AdminNavigationCollapsedProfile />
			<AdminNavigationCollapsedList activeMenu={`/${root}/${activeMenu}`} />
			<AdminNavigationCollapsedBottomItemList />
			<AdminNavigationCollapsedButton />
		</div>
	);
};

export { AdminNavigationCollapsed };
