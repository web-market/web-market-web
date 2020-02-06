import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { check } from '../../icons';
import Icon from '../Icon';
import { isNull } from '../../utils';

const Checkbox = ({ value, onFieldChange }) => {
	const [checkboxValue, setCheckboxValue] = useState(false);

	useEffect(() => {
		if (isNull(value)) {
			onFieldChange(false);
		} else {
			onFieldChange(value);
			setCheckboxValue(value);
		}
	}, [value]);

	const ToggleCheckbox = () => {
		setCheckboxValue(!checkboxValue);
		onFieldChange(!checkboxValue);
	};

	const iconClassName = classNames(
		classes.checkbox_icon,
		{
			[classes.checkbox__checked]: checkboxValue
		}
	);

	return (
		<div
			onClick={ToggleCheckbox}
			className={classes.checkbox}
		>
			<Icon
				className={iconClassName}
				icon={check}
			/>
		</div>
	);
};


Checkbox.defaultProps = {
	value: false
};

Checkbox.propTypes = {
	onFieldChange: PropTypes.func,
	value: PropTypes.bool,
};

export { Checkbox };
