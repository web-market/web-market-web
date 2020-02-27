import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';
import FiltersGroupListItemTooltipActions from './FiltersGroupListItemTooltipActions';
import classes from './styles/index.scss';

const FiltersListItemLeftSide = (
	{
		id,
		hasFilterValues,
		handleFilterEdit,
		handleFilterDelete,
		addFilterGroupValuesIcon,
		showFilterGroupValuesIcon,
		handleAddFilterGroupValue,
		handleShowFilterGroupValues
	}
) => {
	return (
		<div className={classes.filtersGroupListItem_right}>
			{
				hasFilterValues && (
					<Button
						size="tiny"
						type="secondary"
						icon={showFilterGroupValuesIcon}
						actionHandler={handleShowFilterGroupValues}
					/>
				)
			}
			<Button
				size="tiny"
				type="primary"
				icon={addFilterGroupValuesIcon}
				actionHandler={handleAddFilterGroupValue}
				className={classes.filtersGroupListItem_addFilterGroupValueButton}
			/>
			<FiltersGroupListItemTooltipActions
				id={id}
				handleFilterEdit={handleFilterEdit}
				handleFilterDelete={handleFilterDelete}
			/>
		</div>
	);
};

FiltersListItemLeftSide.propTypes = {
	id: PropTypes.number,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func,
	handleAddFilterGroupValue: PropTypes.func,
	handleShowFilterGroupValues: PropTypes.func,
	addFilterGroupValuesIcon: PropTypes.string,
	showFilterGroupValuesIcon: PropTypes.string
};

export default FiltersListItemLeftSide;
