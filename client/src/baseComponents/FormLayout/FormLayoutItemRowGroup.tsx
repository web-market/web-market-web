import React from 'react';

import classes from './style/index.scss';

const FormLayoutItemRowGroup = (
	{
		children
	}
) => {
	return (
		<div className={classes.formLayoutItemRowGroup}>
			{children}
		</div>
	);
};

export { FormLayoutItemRowGroup };
