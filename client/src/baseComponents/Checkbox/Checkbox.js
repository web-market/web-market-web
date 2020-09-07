import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import classes from './styles/index.scss';
import { check } from '../../icons';
import { Icon } from '../Icon/Icon';
import { isNull, isUndefined } from '../../utils';

const Checkbox = (
	{
		value,
		className,
		transition,
		handleClick,
		onFieldChange,
		iconClassName: iconClassNameFromProps,
		iconCheckClassName: iconCheckClassNameFromProps,
	}
) => {
	const [checkboxValue, setCheckboxValue] = useState(false);
	useEffect(() => {
		if (isNull(value) && !isUndefined(onFieldChange)) {
			onFieldChange(false);
		}

		if (value) {
			if (!isUndefined(onFieldChange)) {
				onFieldChange(value);
			}
			setCheckboxValue(value);
		}
	}, [value]);

	const ToggleCheckbox = () => {
		setCheckboxValue(!checkboxValue);
		if (!isUndefined(onFieldChange)) {
			onFieldChange(!checkboxValue);
		}

		if (!isUndefined(handleClick)) {
			handleClick(!checkboxValue);
		}
	};

	const componentClassName = ClassNames(
		classes.checkbox,
		className
	);

	const iconClassName = ClassNames(
		classes.checkbox_icon,
		{
			[classes.checkbox__checked]: checkboxValue && !iconCheckClassNameFromProps,
			[iconCheckClassNameFromProps]: checkboxValue && iconCheckClassNameFromProps,
			[classes.checkbox_icon__transition]: transition,
		},
		iconClassNameFromProps
	);

	return (
		<div
			onClick={ToggleCheckbox}
			className={componentClassName}
		>
			<Icon
				className={iconClassName}
				icon={check}
			/>
		</div>
	);
};


Checkbox.defaultProps = {
	value: false,
	transition: true
};

Checkbox.propTypes = {
	value: PropTypes.bool,
	transition: PropTypes.bool,
	className: PropTypes.string,
	onFieldChange: PropTypes.func,
	handleClick: PropTypes.func,
	iconClassName: PropTypes.string,
	iconCheckClassName: PropTypes.string
};

export { Checkbox };
