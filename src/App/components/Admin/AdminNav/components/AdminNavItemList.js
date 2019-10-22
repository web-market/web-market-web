import React from 'react';
// import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import classNames from 'classnames';
import styles from '../styles/index.scss';

const AdminNavItemList = () => {
	const componentClassName = classNames(
		styles.adminNavItemList
	);

	return (
		<div className={componentClassName}>
			<PaddingBox vrTiny>
				<>
					<AdminNavItem />
				</>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavItemList };
