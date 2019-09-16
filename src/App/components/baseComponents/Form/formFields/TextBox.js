import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({
					onChange,
					name
				}) => {
	return (
		<input
			type="textbox"
			onChange={e => onChange(e.target.value)}
			name={name}
		/>
	);
};

TextBox.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string
};

export default TextBox;
