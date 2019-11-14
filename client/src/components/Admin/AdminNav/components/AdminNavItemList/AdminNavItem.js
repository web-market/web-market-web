import React from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from '../../../../../utils';
import classes from './styles/index.scss';
import { Icon } from '../../../../../baseComponents/Icon/Icon';

import Link from '../../../../../baseComponents/Link';
import AdminNavItemCollapse from './AdminNavItemCollapse';

const AdminNavItem = ({ icon, label, items, hasRoute, link, activeMenu, menuRoute }) => {
	const linkContent = (
			<div className={classes.adminNavItem_content}>
				<span>{ label }</span>
				{icon && (
					<div className={classes.adminNavItem_content_navItemIcon}>
						<Icon
							icon={icon}
						/>
					</div>
				)}
			</div>
		);


	const getNavItem = (content = linkContent) => {
		return (
			<Link
				link={link}
				content={content}
				hasRoute={hasRoute}
				activeLinkClass={classes.adminNavItem_activeLink}
			/>
		);
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return (
			<AdminNavItemCollapse
				items={items}
				icon={icon}
				label={label}
				menuRoute={menuRoute}
				activeMenu={activeMenu}
			/>
		);
	};

	return (
		<div className={classes.adminNavItem}>
			{getItemComponent()}
		</div>
	);
};

AdminNavItem.defaultProps = {};

AdminNavItem.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	activeMenu: PropTypes.string,
	menuRoute: PropTypes.string,
	link: PropTypes.string,
	hasRoute: PropTypes.bool,
	items: PropTypes.array,
};

export { AdminNavItem };
