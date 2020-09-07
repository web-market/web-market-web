import React from 'react';

import classes from './styles/index.scss';

const AdminControlContentBoxFooter = (
	{
		children,
	}
) => {
	return (
		<div
			className={classes.adminControlContentBoxFooter}
		>
			{ children }
		</div>
	);
};

export { AdminControlContentBoxFooter };
