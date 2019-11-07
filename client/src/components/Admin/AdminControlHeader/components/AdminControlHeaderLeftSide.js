import React from 'react';
import PropTypes from 'prop-types';

const AdminControlHeaderLeftSide = ({
										label
									}) => {
	return (
		<div>
			<h4>{label}</h4>
		</div>
	);
};

AdminControlHeaderLeftSide.defaultProps = {};

AdminControlHeaderLeftSide.propTypes = {
	label: PropTypes.string.isRequired
};

export { AdminControlHeaderLeftSide };
