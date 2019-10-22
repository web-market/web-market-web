import React from 'react';
// import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import classNames from 'classnames';
import styles from '../styles/index.scss';

import { goods, statistic } from '../../../../icons/icons';

const AdminNavItemList = () => {
	const componentClassName = classNames(
		styles.adminNavItemList
	);

	return (
		<div className={componentClassName}>
			<PaddingBox vrTiny>
				<>
					<AdminNavItem
						icon={goods}
						label="!!!Продукты"
					/>
					<AdminNavItem
						icon={statistic}
						label="!!!Статистика"
					/>
				</>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavItemList };
