import React from 'react';
import { useLocation } from 'react-router-dom';
import { parsedLocation } from './utils';

import AdminNavProfile from './components/AdminNavProfile';
import AdminNavItemList from './components/AdminNavItemList';
import AdminNavBottomItemList from './components/AdminNavBottomItemList';

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminNav = () => {
	const location = useLocation();

	const { activeMenu } = parsedLocation(location);

	const componentClassName = classNames(
		styles.adminNav
	);

	return (
		<div className={componentClassName}>
			<AdminNavProfile />
			<AdminNavItemList activeMenu={activeMenu} />
			<AdminNavBottomItemList />
		</div>
	);
};

export { AdminNav };
