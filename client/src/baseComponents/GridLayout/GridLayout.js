import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import PendingCloak from '../PendingCloak';

const GridLayout = (
	{
		children,
		isPending
	}
) => {
    return (
		<div className={classes.gridLayout}>
			{isPending && (<PendingCloak />)}
			{children}
		</div>
	);
};

GridLayout.propTypes = {
	isPending: PropTypes.bool,
	children: PropTypes.object
};

export { GridLayout };
