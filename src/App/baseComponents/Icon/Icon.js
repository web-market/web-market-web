import React from 'react';

import PropTypes from 'prop-types';
import { COLORS } from '../../styles/baseColors';

const Icon = ({ width, height, icon, color, className }) => {
	return (
		<svg
			className={className}
			height={height}
			width={width}
			viewBox="0 0 16 8"
		>
			<path d={icon} fill={color} />
		</svg>
	);
};

Icon.defaultProps = {
	width: 16,
	height: 16,
	color: COLORS.FIELD_ICON,
	className: ''
};

Icon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	className: PropTypes.string,
};

export { Icon };
