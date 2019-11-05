import React from 'react';
// import PropTypes from 'prop-types';

import AdminNav from '../AdminNav';
import AdminControl from '../AdminControl';

import classNames from 'classnames';
import styles from './styles/index.scss';

const AdminPanel = () => {
	const componentClassName = classNames(
		styles.adminPanel
	);

	return (
		<div className={componentClassName}>
			<AdminNav />
			<AdminControl />
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminPanel };
