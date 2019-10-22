import React from 'react';
// import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from '../styles/index.scss';
import { Icon } from '../../../../baseComponents/Icon/Icon';
import { goods } from '../../../../icons/icons';

const AdminNavItem = () => {
	const componentClassName = classNames(
		styles.adminNavItem
	);

	return (
		<div className={componentClassName}>
			<Icon
				icon={goods}
			/>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavItem };
