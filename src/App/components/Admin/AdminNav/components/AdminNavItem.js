import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';

import classNames from 'classnames';
import styles from '../styles/index.scss';
import { Icon } from '../../../../baseComponents/Icon/Icon';
import { COLORS } from '../../../../styles/baseColors';

const AdminNavItem = ({ icon, label }) => {
	const componentClassName = classNames(
		styles.adminNavItem
	);

	return (
		<PaddingBox vrTiny>
			<div className={componentClassName}>
				<Icon
					icon={icon}
					color={COLORS.SECONDARY}
				/>
				<div className={styles.adminNavItem_label}>{ label }</div>
			</div>
		</PaddingBox>
	);
};

AdminNavItem.defaultProps = {};

AdminNavItem.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string
};

export { AdminNavItem };
