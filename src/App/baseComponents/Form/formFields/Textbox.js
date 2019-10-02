import React from 'react';
import PropTypes from 'prop-types';

const Textbox = ({
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

Textbox.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string
};

export default Textbox;
