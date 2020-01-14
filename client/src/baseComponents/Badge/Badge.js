import React from 'react';

import classNames from 'classnames';
import classes from './styles/index.scss';

const Badge = ({
					message,
					danger,
					info,
					primary,
					success,
					warning
}) => {
	const componentClassName = classNames(
		classes.badge,
		{
			[classes.badge_primary]: primary,
			[classes.badge_success]: success,
			[classes.badge_info]: info,
			[classes.badge_warning]: warning,
			[classes.badge_danger]: danger
		}
	);

	return (
		<div className={componentClassName}>{message}</div>
	);
};

export { Badge };
