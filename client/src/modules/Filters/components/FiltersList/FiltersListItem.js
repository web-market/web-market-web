import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import FiltersAddFilterGroupValue from '../FiltersAddFilterGroupValue';
import FiltersListItemLeftSide from './FiltersListItemLeftSide';
import FiltersListItemRightSide from './FiltersListItemRightSide';
import { plus, minus } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersListItem = (
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
				<FiltersListItemLeftSide
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

FiltersListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	displayName: PropTypes.string,
	handleFilterEdit: PropTypes.func,
	handleFilterDelete: PropTypes.func
};

export default FiltersListItem;
