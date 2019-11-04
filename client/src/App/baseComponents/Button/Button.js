import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { getType } from './utils';

import classNames from 'classnames';
import styles from './styles/index.scss';

const Button = (props) => {
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

	console.log(getType(props));

	const componentClassName = classNames(
		styles.button,
		{
			[styles.button_primary]: !transparent && primary,
			[styles.button_secondary]: !transparent && secondary,
			[styles.button_success]: !transparent && success,
			[styles.button_danger]: !transparent && danger,
			[styles.button_warning]: !transparent && warning,
			[styles.button_info]: !transparent && info,
			[styles.button_light]: !transparent && light,
			[styles.button_dark]: !transparent && dark,

			[styles.button_primary__transparent]: transparent && primary,
			[styles.button_secondary__transparent]: transparent && secondary,
			[styles.button_success__transparent]: transparent && success,
			[styles.button_danger__transparent]: transparent && danger,
			[styles.button_warning__transparent]: transparent && warning,
			[styles.button_info__transparent]: transparent && info,
			[styles.button_light__transparent]: transparent && light,
			[styles.button_dark__transparent]: transparent && dark,
		}
	);

	return (
		<div
			className={componentClassName}
		>
			{
				icon && (
					<Icon
						icon={icon}
						color=""
					/>
				)
			}
			{label}
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
