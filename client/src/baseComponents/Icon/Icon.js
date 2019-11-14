import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className }) => {
	const getIconContent = () => {
		return className
			? (
				<span className={className}>
					<FontAwesomeIcon icon={icon} />
				</span>
			) : (
				<FontAwesomeIcon icon={icon} />
			);
	};

	return (
		getIconContent()
	);
};

Icon.defaultProps = {};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string
};

export { Icon };
