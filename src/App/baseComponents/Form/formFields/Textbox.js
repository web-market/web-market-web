import React from 'react';
import PropTypes from 'prop-types';

const Textbox = ({
					onFieldChange,
					name,
					onChange,
					value
				}) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	return (
		<input
			type="textbox"
			onChange={e => handleInputChange(e.target.value)}
			name={name}
			value={value}
		/>
	);
};

Textbox.defaultProps = {
	onChange: () => {}
};

Textbox.propTypes = {
	onFieldChange: PropTypes.func,
	onChange: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string
};

export default Textbox;
