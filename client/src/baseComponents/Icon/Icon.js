import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className }) => {
	const getIconContent = () => {
		return (
			<span className={className}>
				<FontAwesomeIcon icon={icon} />
			</span>
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
