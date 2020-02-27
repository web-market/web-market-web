import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../baseComponents/Button';
import FiltersGroupListItemTooltipActions from './FiltersGroupListItemTooltipActions';
import classes from './styles/index.scss';

const FiltersListItemLeftSide = (
	{
		id,
		handleFilterEdit,
		handleFilterDelete,
		addFilterValuesIcon,
		handleAddFilterValue,
	}
) => {
	return (
		<div className={classes.filtersListItem_right}>
			<Button
				size="tiny"
				type="primary"
				icon={addFilterValuesIcon}
				actionHandler={handleAddFilterValue}
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
	addFilterValuesIcon: PropTypes.string
};

export default FiltersListItemLeftSide;
