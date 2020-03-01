import React from 'react';
import PropTypes from 'prop-types';

const FiltersFilterGroupValuesListItemRightSide = ({ value }) => {
	return (
		<div>{value}</div>
	);
};

FiltersFilterGroupValuesListItemRightSide.propTypes = {
	value: PropTypes.string
};

export default FiltersFilterGroupValuesListItemRightSide;
