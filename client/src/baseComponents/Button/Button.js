import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { getType } from './utils';

import { COLORS } from '../../styles/baseColors';
import { TYPE } from './const';
import classNames from 'classnames';
import classes from './styles/index.scss';

const Button = (props) => {
	const [hover, setHover] = useState(false);

	const {
		label,
		primary,
		secondary,
		success,
		danger,
		warning,
		info,
		light,
		dark,
		transparent,
		icon
	} = props;

	const componentClassName = classNames(
		classes.button,
		{
			[classes.button_primary]: !transparent && primary,
			[classes.button_secondary]: !transparent && secondary,
			[classes.button_success]: !transparent && success,
			[classes.button_danger]: !transparent && danger,
			[classes.button_warning]: !transparent && warning,
			[classes.button_info]: !transparent && info,
			[classes.button_light]: !transparent && light,
			[classes.button_dark]: !transparent && dark,

			[classes.button_primary__transparent]: transparent && primary,
			[classes.button_secondary__transparent]: transparent && secondary,
			[classes.button_success__transparent]: transparent && success,
			[classes.button_danger__transparent]: transparent && danger,
			[classes.button_warning__transparent]: transparent && warning,
			[classes.button_info__transparent]: transparent && info,
			[classes.button_light__transparent]: transparent && light,
			[classes.button_dark__transparent]: transparent && dark,

			[classes.button_hasIcon]: icon
		}
	);

	const componentLabelClassName = classNames(
		{
			[classes.button_label]: icon,
		}
	);

	const getIconColor = () => {
		const type = getType(props);
		const isDarkColor = type === TYPE.WARNING || type === TYPE.LIGHT;

		if (transparent) {
			const onHoverColor = isDarkColor ? COLORS.DARK : COLORS.LIGHT;

			return	{
				color: COLORS[type.toUpperCase()],
				onHoverColor
			};
		}

		if (isDarkColor) {
			return	{
				color: COLORS.DARK,
				onHoverColor: COLORS.DARK,
			};
		}

		return	{
			color: COLORS.LIGHT,
			onHoverColor: COLORS.LIGHT,
		};
	};

	const iconColor = getIconColor();

	return (
		<div
			className={componentClassName}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{
				icon && (
					<Icon
						icon={icon}
						onHover={hover}
						color={iconColor.color}
						onHoverColor={iconColor.onHoverColor}
						className={classes.button_icon}
					/>
				)
			}
			<span className={componentLabelClassName}>
				{label}
			</span>
		</div>
	);
};

Button.defaultProps = {
	transparent: false,
	icon: ''
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	transparent: PropTypes.bool,
	icon: PropTypes.string,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	success: PropTypes.bool,
	danger: PropTypes.bool,
	warning: PropTypes.bool,
	info: PropTypes.bool,
	light: PropTypes.bool,
	dark: PropTypes.bool,
};

export { Button };
