import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

const Textbox = (
	{
		name,
		value,
		onChange,
		className,
		onFieldFocus,
		onFieldChange,
	}
) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	const componentClassName = ClassNames(
		classes.textbox,
		className
	);

	return (
		<input
			name={name}
			type="textbox"
			value={value || ''}
			className={componentClassName}
			onFocus={() => onFieldFocus(true)}
			onBlur={() => onFieldFocus(false)}
			onChange={e => handleInputChange(e.target.value)}
		/>
	);
};

Textbox.defaultProps = {
	value: '',
	onChange: () => {},
	onFieldFocus: () => {}
};

Textbox.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	name: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	onFieldFocus: PropTypes.func,
	onFieldChange: PropTypes.func,
};

export { Textbox };
