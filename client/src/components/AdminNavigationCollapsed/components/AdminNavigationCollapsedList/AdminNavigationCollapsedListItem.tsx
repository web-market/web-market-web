import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../baseComponents/Link';
import { Icon } from '../../../../baseComponents/Icon/Icon';
import AdminNavigationCollapsedListItemCollapse from './AdminNavigationCollapsedListItemCollapse';

import { isUndefined } from '../../../../utils';
import classes from './styles/index.scss';

const AdminNavigationCollapsedListItem = ({ icon, items, hasRoute, link, activeMenu, menuRoute }) => {
	const linkContent = (
			<div className={classes.adminNavigationCollapsedListItem_content}>
				{icon && (
					<Icon
						className={classes.adminNavigationCollapsedListItem_content_navItemIcon}
						icon={icon}
					/>
				)}
			</div>
		);

	const getNavItem = (content = linkContent) => {
		return (
			<Link
				link={link}
				content={content}
				hasRoute={hasRoute}
				activeLinkClass={classes.adminNavigationCollapsedListItem_activeLink}
			/>
		);
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return (
			<AdminNavigationCollapsedListItemCollapse
				items={items}
				icon={icon}
				menuRoute={menuRoute}
				activeMenu={activeMenu}
			/>
		);
	};

	return (
		<div className={classes.adminNavigationCollapsedListItem}>
			{getItemComponent()}
		</div>
	);
};

AdminNavigationCollapsedListItem.propTypes = {
	icon: PropTypes.string,
	activeMenu: PropTypes.string,
	menuRoute: PropTypes.string,
	link: PropTypes.string,
	hasRoute: PropTypes.bool,
	items: PropTypes.array,
};

export default AdminNavigationCollapsedListItem;
