import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({
	onChange
}) => {
	return (
		<input
			type="textbox"
			onChange={e => onChange(e.target.value)}
		/>
	);
};

TextBox.propTypes = {
	onChange: PropTypes.func
};

export default TextBox;
