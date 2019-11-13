import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from '../../../../../utils';
import classes from './styles/index.scss';
import { Icon } from '../../../../../baseComponents/Icon/Icon';
import { angleRight } from '../../../../../icons';

import { AdminNavItemCollapsedContent } from './AdminNavItemCollapsedContent';
import Link from '../../../../../baseComponents/Link';
import classNames from 'classnames';

const AdminNavItem = ({ icon, label, items, hasRoute, link }) => {
	const [isOpen, setIsOpen] = useState(false);

	const navItemCollapsed = classNames(
		classes.adminNavItem_content,
		classes.adminNavItem_content_collapsed
	);

	const navItemCollapsedIcon = classNames(
		classes.adminNavItem_collapsedIcon,
		{
			[classes.adminNavItem_collapsedIcon__open]: isOpen
		}
	);

	const linkContent = (
			<div className={classes.adminNavItem_content}>
				<span>{ label }</span>
				{icon && (
					<Icon
						icon={icon}
					/>
				)}
			</div>
		);

	const collapsedLinkContent = (
		<div
			className={navItemCollapsed}
			onClick={() => setIsOpen(!isOpen)}
		>
			<span>{ label }</span>
			<div className={classes.adminNavItem_content_collapsed_iconWrapper}>
				<Icon
					className={navItemCollapsedIcon}
					icon={angleRight}
				/>
				{icon && (
					<Icon
						icon={icon}
					/>
				)}
			</div>
		</div>
	);

	const getNavCollapsedItem = () => {
		return (
			<>
				{collapsedLinkContent}
				{isOpen && (
					<AdminNavItemCollapsedContent items={items} />
				)}
			</>
		);
	};

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

		return getNavCollapsedItem();
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
	label: PropTypes.string.isRequired
};

export { AdminNavItem };
