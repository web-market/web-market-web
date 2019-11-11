import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from '../../../../../utils';

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import Collapser from '../../../../../baseComponents/Collapser';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { Icon } from '../../../../../baseComponents/Icon/Icon';
import { COLORS } from '../../../../../styles/baseColors';

import { AdminNavItemCollapsedContent } from './AdminNavItemCollapsedContent';
import Link from '../../../../../baseComponents/Link';

const AdminNavItem = ({ icon, label, items, hasRoute, link }) => {
	const [hover, setHover] = useState(false);

	const componentClassName = classNames(
		classes.adminNavItem
	);

	const getNavCollapsedItem = () => {
		const labelContent = (
			<>
				{icon && (
					<Icon
						icon={icon}
						color={COLORS.SECONDARY}
						onHover={hover}
						onHoverColor={COLORS.INFO}
						className={classes.adminNavItem_icon}
					/>
				)}
				<span>{ label }</span>
			</>
		);

		return (
			<Collapser
				content={<AdminNavItemCollapsedContent items={items} />}
				label={labelContent}
				className={classes.adminNavItem_collapsed}
				labelClassName={classes.adminNavItem_collapsedLabel}
			/>
		);
	};

	const getNavItem = () => {
		return (
			<>
				{icon && (
					<Icon
						icon={icon}
						color={COLORS.SECONDARY}
						onHover={hover}
						onHoverColor={COLORS.INFO}
						className={classes.adminNavItem_icon}
					/>
				)}
				<Link
					label={label}
					link={link}
					hasRoute={hasRoute}
					activeLinkClass={classes.adminNavItem_active}
				/>
			</>
		);
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return getNavCollapsedItem();
	};

	//TODO: dkosreba. find another solution for svg icon fill
	return (
		<PaddingBox ultraVrTiny>
			<div
				className={componentClassName}
				// onMouseEnter={() => setHover(true)}
				// onMouseLeave={() => setHover(false)}
			>
				{getItemComponent()}
			</div>
		</PaddingBox>
	);
};

AdminNavItem.defaultProps = {};

AdminNavItem.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired
};

export { AdminNavItem };
