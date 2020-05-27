import React, { forwardRef } from 'react';
import classes from './styles/index.scss';

const List = forwardRef((
	{
		children
	},
	ref
) => {
	return (
		<div ref={ref} className={classes.list}>
			{children}
		</div>
	);
});

export { List };
