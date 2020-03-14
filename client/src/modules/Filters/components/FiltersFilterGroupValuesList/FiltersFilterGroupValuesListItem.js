import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FiltersFilterGroupValuesListItemLeftSide from './FiltersFilterGroupValuesListItemLeftSide';
import FiltersFilterGroupValuesListItemRightSide from './FiltersFilterGroupValuesListItemRightSide';
import FiltersFilterGroupValuesListEditContent from './FiltersFilterGroupValuesListEditContent';

import { isNullOrUndefined } from '../../../../utils';
import classes from './styles/index.scss';

const FiltersFilterGroupValuesListItem = (
	{
		id,
		value,
		sortOrder,
		filterGroupValueId,
		handleDeleteFilterGroupValue,
		filterGroupValueEditModeHandler,
		setFilterGroupValueEditModeHandler
	}
) => {
	const [showEditFilterGroupValueForm, setShowEditFilterGroupValueForm] = useState(false);

	const onEditButtonClick = () => {
		setShowEditFilterGroupValueForm(!showEditFilterGroupValueForm);

		if (!isNullOrUndefined(filterGroupValueEditModeHandler)) {
			filterGroupValueEditModeHandler(false);
		}

		if (showEditFilterGroupValueForm) {
			setFilterGroupValueEditModeHandler(null);
		} else {
			setFilterGroupValueEditModeHandler(setShowEditFilterGroupValueForm);
		}
	};

	return (
		<div className={classes.filtersFilterGroupValuesListItem}>
			{
				!showEditFilterGroupValueForm && (
					<>
						<FiltersFilterGroupValuesListItemLeftSide
							value={value}
							sortOrder={sortOrder}
						/>
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
						filterGroupValueId={filterGroupValueId}
					/>
				)
			}
		</div>
	);
};

FiltersFilterGroupValuesListItem.propTypes = {
	id: PropTypes.number,
	value: PropTypes.string,
	sortOrder: PropTypes.number,
	filterGroupValueId: PropTypes.number,
	handleDeleteFilterGroupValue: PropTypes.func,
	filterGroupValueEditModeHandler: PropTypes.func,
	setFilterGroupValueEditModeHandler: PropTypes.func
};

export default FiltersFilterGroupValuesListItem;
