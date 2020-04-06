import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import AdminNavigationListItem from './AdminNavigationListItem';

import classes from './styles/index.scss';
import { mainNavItem } from '../../staticData';

const AdminNavigationList = ({ activeMenu }) => {
	const isInit = useRef(true);

	return (
		<div>
			{
				mainNavItem.map(item => {
					return (
						<AdminNavigationListItem
							isInit={isInit}
							link={item.link}
							key={item.label}
							icon={item.icon}
							label={item.label}
							items={item.items}
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
