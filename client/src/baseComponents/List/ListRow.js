import React from 'react';

import classes from './styles/index.scss';

const ListRow = (
	{
		children
	}
) => {
	return (
		<div
			className={classes.listRow}
		>
			{children}
		</div>
	);
};

export { ListRow };
