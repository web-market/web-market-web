import React from 'react';
import PropTypes from 'prop-types';

const FiltersFilterValue = (
	{
		id
	}
) => {
	return (
		<div>FiltersFilterValue {id}</div>
	);
};

FiltersFilterValue.propTypes = {
	id: PropTypes.number
};

export { FiltersFilterValue };
