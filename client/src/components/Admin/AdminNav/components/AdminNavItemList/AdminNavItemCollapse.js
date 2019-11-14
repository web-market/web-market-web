import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AdminNavItemCollapseContent } from './AdminNavItemCollapseContent';

import { Icon } from '../../../../../baseComponents/Icon/Icon';
import { angleRight } from '../../../../../icons';
import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminNavItemCollapse = ({ items, label, icon, menuRoute, activeMenu }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [collapseContentHeight, setCollapseContentHeight] = useState(collapseContentHeight);
	const [height, setHeight] = useState(collapseContentHeight);

	useEffect(() => {
		return isOpen ? setHeight(collapseContentHeight + 32) : setHeight(0);
	}, [isOpen, collapseContentHeight]);

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
					setCollapseContentHeight={setCollapseContentHeight}
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
