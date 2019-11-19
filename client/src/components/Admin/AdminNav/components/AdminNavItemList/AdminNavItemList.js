import React from 'react';
import PropTypes from 'prop-types';

import { AdminNavItem } from './AdminNavItem';
import { mainNavItem } from '../../store/staticData';

const AdminNavItemList = ({ activeMenu }) => {
	return (
		<div>
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
		</div>
	);
};

AdminNavItemList.defaultProps = {};

AdminNavItemList.propTypes = {
	activeMenu: PropTypes.string
};

export { AdminNavItemList };
