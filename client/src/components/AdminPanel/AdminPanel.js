import React from 'react';
import NavigationGlobalContextProvider from '../../App/store/NavigationGlobalContext';

import AdminNavigation from '../AdminNavigation';
import AdminNavigationCollapsed from '../AdminNavigationCollapsed';
import AdminControl from '../AdminControl';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminPanel = () => {
	const componentClassName = classNames(
		classes.adminPanel
	);

	return (
		<div className={componentClassName}>
			<NavigationGlobalContextProvider>
				<AdminNavigation />
				<AdminNavigationCollapsed />
				<AdminControl />
			</NavigationGlobalContextProvider>
		</div>
	);
};

export { AdminPanel };
