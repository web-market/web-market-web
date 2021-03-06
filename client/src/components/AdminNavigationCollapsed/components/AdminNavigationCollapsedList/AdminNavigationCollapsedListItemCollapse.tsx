import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { AdminNavigationCollapsedContent } from '../AdminNavigationCollapsedContent/AdminNavigationCollapsedContent';

import { Icon } from '../../../../baseComponents/Icon/Icon';
import classNames from 'classnames';
import classes from './styles/index.scss';
import OverlayPoint from '../../../../baseComponents/OverlayPoint';

const AdminNavigationCollapsedListItemCollapse = (
	{
		icon,
		items,
		menuRoute,
		activeMenu
	}
) => {
	const [isOpen, setIsOpen] = useState(false);
	const tooltipActionRef = useRef(null);

	const navItemCollapsed = classNames(
		classes.adminNavigationCollapsedListItem_content,
		{
			[classes.adminNavigationCollapsedListItem_hasActiveChild]: menuRoute === activeMenu
		}
	);

	const collapsedLinkContent = (
		<div
			className={navItemCollapsed}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				ref={tooltipActionRef}
				className={classes.adminNavigationCollapsedListItem_content_iconWrapper}
			>
				{icon && (
					<div className={classes.adminNavigationCollapsedListItem_content_navItemIcon}>
						<Icon
							icon={icon}
							className={classes.adminNavigationCollapsedListItem_content_navItemIcon}
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
				{
					isOpen && (
						<OverlayPoint
							position="mobile-navigation"
							onClose={() => setIsOpen(!isOpen)}
							componentRef={tooltipActionRef.current}
							render={(renderData) => {
								return (
									<AdminNavigationCollapsedContent
										items={items}
										{...renderData}
									/>
								);
							}
							}
						/>
					)
				}
			</>
		);
	};

	return getNavCollapsedItem();
};

AdminNavigationCollapsedListItemCollapse.propTypes = {
	items: PropTypes.array,
	icon: PropTypes.string,
	label: PropTypes.string,
	activeMenu: PropTypes.string,
	menuRoute: PropTypes.string,
};

export default AdminNavigationCollapsedListItemCollapse;
