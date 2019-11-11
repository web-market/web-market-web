import React from 'react';
// import PropTypes from 'prop-types';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import classNames from 'classnames';
import styles from './styles/index.scss';
import { mainNavItem } from '../../store/staticData';

const AdminNavItemList = () => {
	const componentClassName = classNames(
		styles.adminNavItemList
	);

	return (
		<div className={componentClassName}>
			<PaddingBox vrTiny>
				<>
					{
						mainNavItem.map(item => {
							return (
								<AdminNavItem
									key={item.label}
									icon={item.icon}
									label={item.label}
									items={item.items}
									link={item.link}
									hasRoute={item.hasRoute}
								/>
							);
						})
					}
				</>
			</PaddingBox>
		</div>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export { AdminNavItemList };
