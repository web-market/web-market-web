import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';

import Button from '../../../../baseComponents/Button';
import FiltersGroupListItemTooltipActions from './FiltersGroupListItemTooltipActions';
import classes from './styles/index.scss';

const FiltersListItemLeftSide = (
	{
		id,
		handleFilterEdit,
		handleFilterDelete,
		addFilterGroupValuesIcon,
		showFilterGroupValuesIcon,
		handleShowFilterGroupValues,
		handleShoAddFilterGroupValueForm
	}
) => {
	const { hasFilterGroupValues } = useContext(FiltersContext);

	return (
		<div className={classes.filtersGroupListItem_right}>
			{
				hasFilterGroupValues[id] && (
					<Button
						size="small"
						type="secondary"
						icon={showFilterGroupValuesIcon}
						actionHandler={handleShowFilterGroupValues}
					/>
				)
			}
			<Button
				size="small"
				type="secondary"
				icon={addFilterGroupValuesIcon}
				actionHandler={handleShoAddFilterGroupValueForm}
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
	addFilterGroupValuesIcon: PropTypes.string,
	showFilterGroupValuesIcon: PropTypes.string,
	handleShowFilterGroupValues: PropTypes.func,
	handleShoAddFilterGroupValueForm: PropTypes.func,
};

export default FiltersListItemLeftSide;
