import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const ListRowItem = (
	{
		width,
		children
	}
) => {
	return (
		<div
			style={{ width }}
			className={classes.listRowItem}
		>
			{children}
		</div>
	);
};

ListRowItem.propTypes = {
	width: PropTypes.number
};

export { ListRowItem };
