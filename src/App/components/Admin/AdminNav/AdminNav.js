import React from 'react';
// import PropTypes from 'prop-types';

import { AdminNavProfile } from './components/AdminNavProfile';
import { AdminNavItemList } from './components/AdminNavItemList';
import { AdminNavBottomItemList } from './components/AdminNavBottomItemList';

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminNav = () => {
	const componentClassName = classNames(
		styles.adminNav
	);

	return (
		<div className={componentClassName}>
			<AdminNavProfile />
			<AdminNavItemList />
			<AdminNavBottomItemList />
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNav };
