import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className, onClick }) => {
	return (
		<FontAwesomeIcon
			className={className}
			icon={icon}
			onClick={onClick}
		/>
	);
};

Icon.defaultProps = {
	onClick: () => {}
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export { Icon };
