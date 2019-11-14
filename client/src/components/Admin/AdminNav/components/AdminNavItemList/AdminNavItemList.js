import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import { AdminNavItem } from './AdminNavItem';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { mainNavItem } from '../../store/staticData';

const AdminNavItemList = ({ activeMenu }) => {
	const componentClassName = classNames(
		classes.adminNavItemList
	);

	return (
		<div className={componentClassName}>
			<PaddingBox vrTiny>
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
								menuRoute={item.menuRoute}
								activeMenu={activeMenu}
							/>
						);
					})
				}
			</PaddingBox>
		</div>
	);
};

AdminNavItemList.defaultProps = {};

AdminNavItemList.propTypes = {
	activeMenu: PropTypes.string
};

export { AdminNavItemList };
