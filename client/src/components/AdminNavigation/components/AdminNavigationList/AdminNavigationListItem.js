import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../../baseComponents/Icon';

import { isUndefined } from '../../../../utils';
import classes from './styles/index.scss';

import Link from '../../../../baseComponents/Link';
import AdminNavigationListItemCollapse from './AdminNavigationListItemCollapse';

const AdminNavigationListItem = (
	{
		link,
		icon,
		label,
		items,
		isInit,
		hasRoute,
		menuRoute,
		activeMenu
	}
) => {
	const linkContent = (
			<div className={classes.adminNavigationListItem_content}>
				<span>{ label }</span>
				{icon && (
					<div className={classes.adminNavigationListItem_content_navItemIcon}>
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
				activeLinkClass={classes.adminNavigationListItem_activeLink}
			/>
		);
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return (
			<AdminNavigationListItemCollapse
				isInit={isInit}
				items={items}
				icon={icon}
				label={label}
				menuRoute={menuRoute}
				activeMenu={activeMenu}
			/>
		);
	};

	return (
		<div className={classes.adminNavigationListItem}>
			{getItemComponent()}
		</div>
	);
};

AdminNavigationListItem.defaultProps = {};

AdminNavigationListItem.propTypes = {
	icon: PropTypes.string,
	link: PropTypes.string,
	items: PropTypes.array,
	hasRoute: PropTypes.bool,
	isInit: PropTypes.object,
	menuRoute: PropTypes.string,
	activeMenu: PropTypes.string,
	label: PropTypes.string.isRequired
};

export default AdminNavigationListItem;
