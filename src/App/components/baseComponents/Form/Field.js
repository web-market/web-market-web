import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
	component
}) => {
	return (
		<div>
			{component}
		</div>
	);
};

Field.propTypes = {
	component: PropTypes.element.isRequired
};

export { Field };
