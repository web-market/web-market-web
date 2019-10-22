import React from 'react';
// import PropTypes from 'prop-types';

import { AdminNavItemList } from './components/AdminNavItemList';

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminNav = () => {
	const componentClassName = classNames(
		styles.adminNav
	);

	return (
		<div className={componentClassName}>
			<AdminNavItemList />
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNav };
