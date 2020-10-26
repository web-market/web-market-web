import React, { useState, useEffect, FC } from 'react';

import ClassNames from 'classnames';
import classes from './styles/index.scss';
import { check } from '../../icons';
import { Icon } from '../Icon/Icon';
import { isNull, isUndefined } from '../../utils';

type CheckboxType = {
    value?: boolean,
    transition?: boolean,
    className?: string,
    onFieldChange?: (isChange: boolean) => any,
    handleClick?: (value: boolean) => boolean,
    iconClassName?: string,
    iconCheckClassName?: string
};

const Checkbox: FC<CheckboxType> = (
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

export { Checkbox };
