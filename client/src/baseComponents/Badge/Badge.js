import React, { forwardRef } from 'react';

import classNames from 'classnames';
import classes from './styles/index.scss';

const Badge = forwardRef((
	{
		message,
		danger,
		info,
		primary,
		success,
		warning
	},
	ref
) => {
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
		<div
			ref={ref}
			className={componentClassName}
		>
			{message}
		</div>
	);
});

export { Badge };
