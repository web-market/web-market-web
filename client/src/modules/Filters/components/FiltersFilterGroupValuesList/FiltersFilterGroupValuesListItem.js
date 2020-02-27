import React from 'react';
import PropTypes from 'prop-types';

const FiltersFilterGroupValuesListItem = (
	{
		id,
		value
	}
) => {
	return (
		<div>{ value }</div>
	);
};

FiltersFilterGroupValuesListItem.propTypes = {
	id: PropTypes.number,
	value: PropTypes.string
};

export default FiltersFilterGroupValuesListItem;
