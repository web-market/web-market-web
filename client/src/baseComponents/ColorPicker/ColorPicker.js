import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import { Textbox } from '../Textbox';

const ColorPicker = (
	{
		name,
		value,
		onChange,
		defaultColor,
		onFieldFocus,
		onFieldChange
	}
) => {
	const handleInputChange = (value) => {
		onFieldChange(value || defaultColor);
		onChange(value || defaultColor);
	};

	return (
		<div className={classes.сolorPicker}>
			<div className={classes.сolorPicker_inputWrapper}>
				<input
					name={name}
					type="color"
					value={value || defaultColor}
					className={classes.сolorPicker_input}
					onFocus={() => onFieldFocus(true)}
					onBlur={() => onFieldFocus(false)}
					onChange={e => handleInputChange(e.target.value)}
				/>
			</div>
			<Textbox
				value={value || defaultColor}
				onFieldChange={value => handleInputChange(value)}
			/>
		</div>
	);
};

ColorPicker.defaultProps = {
	defaultColor: '#696969',
	onChange: () => {},
	onFieldFocus: () => {}
};

ColorPicker.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	defaultColor: PropTypes.string,
	onChange: PropTypes.func,
	onFieldFocus: PropTypes.func
};

export { ColorPicker };
