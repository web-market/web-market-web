import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className }) => {
	return (
		<FontAwesomeIcon
			className={className}
			icon={icon}
		/>
	);
};

Icon.defaultProps = {};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string
};

export { Icon };
