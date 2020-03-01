import React from 'react';
import PropTypes from 'prop-types';

import FiltersFilterGroupValuesListEditContentRightSide from './FiltersFilterGroupValuesListEditContentRightSide';
import FiltersFilterGroupValuesListEditContentLeftSide from './FiltersFilterGroupValuesListEditContentLeftSide';

const FiltersFilterGroupValuesListEditContent = (
	{
		id,
		onEditButtonClick
	}
) => {
	return (
		<>
			<FiltersFilterGroupValuesListEditContentLeftSide
				id={id}
			/>
			<FiltersFilterGroupValuesListEditContentRightSide
				onEditButtonClick={onEditButtonClick}
			/>
		</>
	);
};

FiltersFilterGroupValuesListEditContent.defaultProps = {
	id: PropTypes.number,
	onEditButtonClick: PropTypes.func
};

export default FiltersFilterGroupValuesListEditContent;
