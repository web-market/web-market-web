import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import FiltersAddFilterGroupValue from '../FiltersAddFilterGroupValue';
import FiltersGroupListItemLeftSide from './FiltersGroupListItemLeftSide';
import FiltersListItemRightSide from './FiltersGroupListItemRightSide';
import { plus, minus } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersGroupListItem = (
	{
		id,
		name,
		displayName,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const [showAddFilterSection, setShowAddFilterSection] = useState(false)

	const handleAddFilterValue = () => {
		console.log(id);
		setShowAddFilterSection(!showAddFilterSection);
		//ProcessingFilterValues
	};

	const addFilterValuesIcon = useMemo(() => {
		return showAddFilterSection ? minus : plus;
	}, [showAddFilterSection]);

	return (
		<div>
			<div className={classes.filtersListItem}>
				<FiltersGroupListItemLeftSide
					name={name}
					displayName={displayName}
				/>
				<FiltersListItemRightSide
					id={id}
					handleFilterEdit={handleFilterEdit}
					handleFilterDelete={handleFilterDelete}
					addFilterValuesIcon={addFilterValuesIcon}
					handleAddFilterValue={handleAddFilterValue}
				/>
			</div>
			{
				showAddFilterSection && (
					<FiltersAddFilterGroupValue id={id} />
				)
			}
		</div>
	);
};

FiltersGroupListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	displayName: PropTypes.string,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func
};

export default FiltersGroupListItem;
