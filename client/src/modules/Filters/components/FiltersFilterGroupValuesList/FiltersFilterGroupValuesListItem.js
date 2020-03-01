import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FiltersFilterGroupValuesListItemLeftSide from './FiltersFilterGroupValuesListItemLeftSide';
import FiltersFilterGroupValuesListItemRightSide from './FiltersFilterGroupValuesListItemRightSide';
import FiltersFilterGroupValuesListEditContent from './FiltersFilterGroupValuesListEditContent';

import classes from './styles/index.scss';

const FiltersFilterGroupValuesListItem = (
	{
		id,
		value,
		handleDeleteFilterGroupValue
	}
) => {
	const [showEditFilterGroupValueForm, setShowEditFilterGroupValueForm] = useState(false);

	const onEditButtonClick = () => {
		setShowEditFilterGroupValueForm(!showEditFilterGroupValueForm);
	};

	const handleEditFilterGroupValue = (id) => {
		console.log(id);
	};

	return (
		<div className={classes.filtersFilterGroupValuesListItem}>
			{
				!showEditFilterGroupValueForm && (
					<>
						<FiltersFilterGroupValuesListItemLeftSide value={value} />
						<FiltersFilterGroupValuesListItemRightSide
							id={id}
							onEditButtonClick={onEditButtonClick}
							handleDeleteFilterGroupValue={handleDeleteFilterGroupValue}
						/>
					</>
				)
			}
			{
				showEditFilterGroupValueForm && (
					<FiltersFilterGroupValuesListEditContent
						id={id}
						onEditButtonClick={onEditButtonClick}
						handleEditFilterGroupValue={handleEditFilterGroupValue}
					/>
				)
			}
		</div>
	);
};

FiltersFilterGroupValuesListItem.propTypes = {
	id: PropTypes.number,
	value: PropTypes.string,
	handleDeleteFilterGroupValue: PropTypes.func
};

export default FiltersFilterGroupValuesListItem;
