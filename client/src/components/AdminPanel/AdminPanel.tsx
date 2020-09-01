import React from 'react';
import { CookiesProvider } from 'react-cookie';
import NavigationGlobalContextProvider from '../../App/store/NavigationGlobalContext';

import { AdminNavigation } from '../AdminNavigation/AdminNavigation';
import { AdminNavigationCollapsed } from '../AdminNavigationCollapsed/AdminNavigationCollapsed';
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

const AdminPanelWithCookiesProvider = () => (
	<CookiesProvider>
		<AdminPanel />
	</CookiesProvider>
);

export default AdminPanelWithCookiesProvider;
