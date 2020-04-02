import React from 'react';
import PropTypes from 'prop-types';

import AdminNavigationListItem from './AdminNavigationListItem';
import { mainNavItem } from '../../staticData';

import classes from './styles/index.scss';

const AdminNavigationList = ({ activeMenu }) => {
	return (
		<div>
			{
				mainNavItem.map(item => {
					return (
						<AdminNavigationListItem
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
			<div className={classes.adminNavigationList_separator}></div>
		</div>
	);
};

AdminNavigationList.defaultProps = {};

AdminNavigationList.propTypes = {
	activeMenu: PropTypes.string
};

export { AdminNavigationList };
