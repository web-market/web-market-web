import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { AdminNavigationListItemCollapseContent } from './AdminNavigationListItemCollapseContent';

import { Icon } from '../../../../baseComponents/Icon/Icon';
import { angleRight } from '../../../../icons';
import classNames from 'classnames';
import classes from './styles/index.scss';
import { isUndefined } from '../../../../utils';

const AdminNavigationListItemCollapse = ({ items, label, icon, menuRoute, activeMenu }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState(0);
	const [collapseRef, setCollapseRef] = useState();

	//TODO: dKostreba. create a state management provider for side nav menu. remove isInit
	//research solution to get height after render dom
	const isInit = useRef(true);

	const getHeight = useCallback(() => {
		if (isUndefined(collapseRef)) return;

		const height = collapseRef.childNodes[0].offsetHeight;
		const extraHeight = collapseRef.childNodes[0].childElementCount * 16;

		if (menuRoute === activeMenu && isInit.current) {
			isInit.current = false;

			return height + extraHeight;
		}

		return height;
	}, [collapseRef, menuRoute, activeMenu]);

	useEffect(() => {
		setIsOpen(menuRoute === activeMenu);
	}, [setIsOpen, activeMenu, menuRoute]);

	useEffect(() => {
		return isOpen ? setHeight(getHeight()) : setHeight(0);
	}, [isOpen, collapseRef, getHeight]);

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
				<AdminNavigationListItemCollapseContent
					items={items}
					setCollapseRef={setCollapseRef}
					height={height}
				/>
			</>
		);
	};

	return getNavCollapsedItem();
};

AdminNavigationListItemCollapse.defaultProps = {};

AdminNavigationListItemCollapse.propTypes = {
	items: PropTypes.array,
	icon: PropTypes.string,
	label: PropTypes.string,
	activeMenu: PropTypes.string,
	menuRoute: PropTypes.string,
};

export default AdminNavigationListItemCollapse;
