import React from 'react';
import PropTypes from 'prop-types';

import AdminNavigationCollapsedListItem from './AdminNavigationCollapsedListItem';
import { mainNavItem } from '../../staticData';

import classes from './styles/index.scss';

const AdminNavigationCollapsedList = ({ activeMenu }) => {
	return (
		<div>
			{
				mainNavItem.map(item => {
					return (
						<AdminNavigationCollapsedListItem
							key={item.label}
							icon={item.icon}
							items={item.items}
							link={item.link}
							hasRoute={item.hasRoute}
							menuRoute={item.menuRoute}
							activeMenu={activeMenu}
						/>
					);
				})
			}
			<div className={classes.adminNavigationCollapsedList_separator}></div>
		</div>
	);
};

AdminNavigationCollapsedList.defaultProps = {};

AdminNavigationCollapsedList.propTypes = {
	activeMenu: PropTypes.string
};

export { AdminNavigationCollapsedList };
