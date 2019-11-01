import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from "../../../../../utils";

import PaddingBox from '../../../../../baseComponents/PaddingBox';
import Collapser from "../../../../../baseComponents/Collapser";

import classNames from 'classnames';
import styles from './styles/index.scss';
import { Icon } from '../../../../../baseComponents/Icon/Icon';
import { COLORS } from '../../../../../styles/baseColors';

import { AdminNavItemCollapsedContent } from './AdminNavItemCollapsedContent'

const AdminNavItem = ({ icon, label, items }) => {
	const [hover, setHover] = useState(false);

	const componentClassName = classNames(
		styles.adminNavItem
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
						className={styles.adminNavItem_icon}
					/>
				)}
				<span>{ label }</span>
			</>
		);

		return (
			<Collapser
				content={<AdminNavItemCollapsedContent items={items} />}
				label={labelContent}
				className={styles.adminNavItem_collapsed}
				labelClassName={styles.adminNavItem_collapsedLabel}
			/>
		)

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
						className={styles.adminNavItem_icon}
					/>
				)}
				<span>{ label }</span>
			</>
		)
	};

	const getItemComponent = () => {
		if (isUndefined(items)) return getNavItem();

		return getNavCollapsedItem();
	};

	return (
		<PaddingBox ultraVrTiny>
			<div
				className={componentClassName}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
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