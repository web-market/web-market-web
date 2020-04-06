import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
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

const AdminPanelWithCookiesProvider = () => (
	<CookiesProvider>
		<AdminPanel />
	</CookiesProvider>
);

export default AdminPanelWithCookiesProvider;
