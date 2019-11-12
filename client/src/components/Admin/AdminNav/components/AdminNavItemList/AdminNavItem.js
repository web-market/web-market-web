import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from '../../../../../utils';
import classes from './styles/index.scss';
import { Icon } from '../../../../../baseComponents/Icon/Icon';

import { AdminNavItemCollapsedContent } from './AdminNavItemCollapsedContent';
import Link from '../../../../../baseComponents/Link';

const AdminNavItem = ({ icon, label, items, hasRoute, link }) => {
	const [isOpen, setIsOpen] = useState(false);

	const linkContent = (
			<>
				<span>{ label }</span>
				{icon && (
					<Icon
						icon={icon}
					/>
				)}
			</>
		);

	const getNavCollapsedItem = () => {
		const linkContent = (
			<div
				className={classes.adminNavItem_link}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{ label }</span>
				<span>Open</span>
				{icon && (
					<Icon
						icon={icon}
					/>
				)}
			</div>
		);

		return (
			<>
				{linkContent}
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
				routeLinkClass={classes.adminNavItem_link}
				activeLinkClass={classes.adminNavItem_activeLink}
			/>
		);
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return getNavCollapsedItem();
	};

	return getItemComponent();
};

AdminNavItem.defaultProps = {};

AdminNavItem.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired
};

export { AdminNavItem };
