import React from 'react';
import PropTypes from 'prop-types';

import FiltersFilterGroupValuesListEditForm from './FiltersFilterGroupValuesListEditForm';

const FiltersFilterGroupValuesListEditContentLeftSide = (
	{
		id,
		initialValues,
		handleEditFilterGroupValue
	}
) => {
	return (
		<FiltersFilterGroupValuesListEditForm
			id={id}
			initialValues={initialValues}
			handleEditFilterGroupValue={handleEditFilterGroupValue}
		/>
	);
};

FiltersFilterGroupValuesListEditContentLeftSide.propTypes = {
	id: PropTypes.number,
	initialValues: PropTypes.object,
	handleEditFilterGroupValue: PropTypes.func
};

export default FiltersFilterGroupValuesListEditContentLeftSide;
