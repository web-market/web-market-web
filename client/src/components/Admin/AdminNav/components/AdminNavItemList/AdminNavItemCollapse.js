import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AdminNavItemCollapseContent } from './AdminNavItemCollapseContent';

import { Icon } from '../../../../../baseComponents/Icon/Icon';
import { angleRight } from '../../../../../icons';
import classNames from 'classnames';
import classes from './styles/index.scss';
import { isUndefined } from '../../../../../utils';

const AdminNavItemCollapse = ({ items, label, icon, menuRoute, activeMenu }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const [collapseRef, setCollapseRef] = useState();

	useEffect(() => {
		if (isUndefined(collapseRef)) return;

		const collapseContentHeight = collapseRef.childNodes[0].offsetHeight;

		return isOpen ? setHeight(collapseContentHeight) : setHeight(0);
	}, [isOpen, collapseRef]);

	const navItemCollapsed = classNames(
		classes.adminNavItem_content,
		{
			[classes.adminNavItem_hasActiveChild]: menuRoute === activeMenu
		}
	);

	const navItemCollapsedIcon = classNames(
		classes.adminNavItem_collapsedIcon,
		{
			[classes.adminNavItem_collapsedIcon__open]: isOpen
		}
	);

	const collapsedLinkContent = (
		<div
			className={navItemCollapsed}
			onClick={() => setIsOpen(!isOpen)}
		>
			<span>{ label }</span>
			<div className={classes.adminNavItem_content_iconWrapper}>
				<Icon
					className={navItemCollapsedIcon}
					icon={angleRight}
				/>
				{icon && (
					<div className={classes.adminNavItem_content_navItemIcon}>
						<Icon
							icon={icon}
							className={classes.adminNavItem_content_navItemIcon}
						/>
					</div>
				)}
			</div>
		</div>
	);

	const getNavCollapsedItem = () => {
		return (
			<>
				{collapsedLinkContent}
				<AdminNavItemCollapseContent
					items={items}
					setCollapseRef={setCollapseRef}
					height={height}
				/>
			</>
		);
	};

	return getNavCollapsedItem();
};

AdminNavItemCollapse.defaultProps = {};

AdminNavItemCollapse.propTypes = {
	items: PropTypes.array,
	icon: PropTypes.string,
	label: PropTypes.string,
	activeMenu: PropTypes.string,
	menuRoute: PropTypes.string,
};

export default AdminNavItemCollapse;
