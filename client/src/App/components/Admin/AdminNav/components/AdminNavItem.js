import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../../../../baseComponents/PaddingBox';

import classNames from 'classnames';
import styles from '../styles/index.scss';
import { Icon } from '../../../../baseComponents/Icon/Icon';
import { COLORS } from '../../../../styles/baseColors';

const AdminNavItem = ({ icon, label }) => {
	const [hover, setHover] = useState(false);

	const componentClassName = classNames(
		styles.adminNavItem
	);

	return (
		<PaddingBox ultraVrTiny>
			<div
				className={componentClassName}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Icon
					icon={icon}
					color={COLORS.SECONDARY}
					onHover={hover}
					onHoverColor={COLORS.INFO}
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
