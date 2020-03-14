import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';

const FiltersFilterGroupValuesListItemLeftSide = (
	{
		value,
		sortOrder
	}
) => {
	return (
		<div className={classes.filtersFilterGroupValuesListItemLeftSide}>
			<div className={classes.filtersFilterGroupValuesListItemLeftSide_item}>{value}</div>
			<div className={classes.filtersFilterGroupValuesListItemLeftSide_item}>{sortOrder}</div>
		</div>
	);
};

FiltersFilterGroupValuesListItemLeftSide.propTypes = {
	value: PropTypes.string,
	sortOrder: PropTypes.number
};

export default FiltersFilterGroupValuesListItemLeftSide;
