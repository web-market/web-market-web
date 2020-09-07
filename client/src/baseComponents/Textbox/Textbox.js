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
		placeholder,
		onFieldBLur
	}
) => {
	const handleInputChange = (value) => {
		onFieldChange(value);
		onChange(value);
	};

	const handleBlur = () => {
		onFieldFocus(false);

		onFieldBLur(value);
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
			placeholder={placeholder}
			className={componentClassName}
			onFocus={() => onFieldFocus(true)}
			onBlur={handleBlur}
			onChange={e => handleInputChange(e.target.value)}
		/>
	);
};

Textbox.defaultProps = {
	value: '',
	onChange: () => {},
	onFieldFocus: () => {},
	onFieldBLur: () => {}
};

Textbox.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	name: PropTypes.string,
	onChange: PropTypes.func,
	onFieldBLur: PropTypes.func,
	className: PropTypes.string,
	onFieldFocus: PropTypes.func,
	placeholder: PropTypes.string,
	onFieldChange: PropTypes.func,
};

export { Textbox };
