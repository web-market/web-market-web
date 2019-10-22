import React from 'react';

import PropTypes from 'prop-types';
import { COLORS } from '../../styles/baseColors';

const Icon = ({ icon, color, className }) => {
	return (
		<div
			className={className}
			style={{
				width: 18,
				height: 18
			}}
		>
			<svg
				style={{
					verticalAlign: 'bottom'
				}}
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
