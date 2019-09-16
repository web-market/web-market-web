import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
				children,
				onSubmit
			}) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(e);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export { Form };
