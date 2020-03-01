import React from 'react';
import PropTypes from 'prop-types';

import FiltersFilterGroupValuesListEditForm from './FiltersFilterGroupValuesListEditForm';

const FiltersFilterGroupValuesListEditContentLeftSide = (
	{
		id
	}
) => {
	return (
		<FiltersFilterGroupValuesListEditForm id={id} />
	);
};

FiltersFilterGroupValuesListEditContentLeftSide.propTypes = {
	id: PropTypes.number
};

export default FiltersFilterGroupValuesListEditContentLeftSide;
