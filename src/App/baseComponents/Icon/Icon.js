import React from 'react';

import PropTypes from 'prop-types';
import { COLORS } from '../../styles/baseColors';

import styles from './styles/index.scss';
import classNames from 'classnames';

const Icon = ({ icon, color, className }) => {
	const componentClassName = classNames(
		styles.icon,
		className
	);

	return (
		<div
			className={componentClassName}
		>
			<svg
				className={styles.icon_svg}
				viewBox="0 0 24 24"
			>
				<path d={icon} fill={color} />
			</svg>
		</div>
	);
};

Icon.defaultProps = {
	color: COLORS.FIELD_ICON,
	className: ''
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	className: PropTypes.string,
};

export { Icon };
