import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
	onChange,
	name,
	placeholder,
	value
}) => {
	return (
		<textarea
			placeholder={placeholder}
			onChange={e => onChange(e.target.value)}
			name={name}
			value={value}
		/>
	);
};

Textarea.defaultProps = {
	onChange: () => {},
	value: ''
};

Textarea.propTypes = {
	onChange: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string
};

export { Textarea };
