import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const Textbox = (
	{
		onFieldChange,
		onFieldFocus,
		name,
		onChange,
		value
	}
) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	return (
		<input
			type="textbox"
			onChange={e => handleInputChange(e.target.value)}
			onFocus={() => onFieldFocus(true)}
			onBlur={() => onFieldFocus(false)}
			name={name}
			value={value || ''}
			className={classes.textbox}
		/>
	);
};

Textbox.defaultProps = {
	onChange: () => {},
	onFieldFocus: () => {},
	value: ''
};

Textbox.propTypes = {
	onFieldChange: PropTypes.func,
	onFieldFocus: PropTypes.func,
	onChange: PropTypes.func,
	name: PropTypes.string,
	value: PropTypes.string,
};

export { Textbox };
