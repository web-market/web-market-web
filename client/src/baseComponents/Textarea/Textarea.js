import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (
	{
		onChange,
		name,
		placeholder,
		value,
		onFieldFocus
	}
) => {
	return (
		<textarea
			placeholder={placeholder}
			onChange={e => onChange(e.target.value)}
			onFocus={() => onFieldFocus(true)}
			onBlur={() => onFieldFocus(false)}
			name={name}
			value={value}
		/>
	);
};

Textarea.defaultProps = {
	onChange: () => {},
	onFieldFocus: () => {},
	value: ''
};

Textarea.propTypes = {
	onChange: PropTypes.func,
	onFieldFocus: PropTypes.func,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string
};

export { Textarea };
