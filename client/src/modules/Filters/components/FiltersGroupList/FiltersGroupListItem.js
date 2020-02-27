import React, { useState, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';

import FiltersAddFilterGroupValue from '../FiltersAddFilterGroupValue';
import FiltersFilterGroupValuesList from '../FiltersFilterGroupValuesList';
import FiltersGroupListItemLeftSide from './FiltersGroupListItemLeftSide';
import FiltersListItemRightSide from './FiltersGroupListItemRightSide';
import { plus, minus, chevronDown, chevronUp } from '../../../../icons';
import classes from './styles/index.scss';

const FiltersGroupListItem = (
	{
		id,
		name,
		displayName,
		hasFilterValues,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const { getFilterGroupValue } = useContext(FiltersContext);

	const [showAddFilterSection, setShowAddFilterSection] = useState(false);
	const [showFilterGroupValues, setShowFilterGroupValues] = useState(false);
	const [filterGroupValues, setFilterGroupValues] = useState([]);

	const handleAddFilterGroupValue = () => {
		setShowAddFilterSection(!showAddFilterSection);
	};

	const handleShowFilterGroupValues = () => {
		getFilterGroupValue(id)
			.then(({ data }) => {
				setFilterGroupValues(data);
			});

		setShowFilterGroupValues(!showFilterGroupValues);
	};

	const addFilterGroupValuesIcon = useMemo(() => {
		return showAddFilterSection ? minus : plus;
	}, [showAddFilterSection]);

	const showFilterGroupValuesIcon = useMemo(() => {
		return showFilterGroupValues ? chevronUp : chevronDown;
	}, [showFilterGroupValues]);

	return (
		<>
			<div className={classes.filtersGroupListItem}>
				<FiltersGroupListItemLeftSide
					name={name}
					displayName={displayName}
				/>
				<FiltersListItemRightSide
					id={id}
					hasFilterValues={hasFilterValues}
					handleFilterEdit={handleFilterEdit}
					handleFilterDelete={handleFilterDelete}
					addFilterGroupValuesIcon={addFilterGroupValuesIcon}
					handleAddFilterGroupValue={handleAddFilterGroupValue}
					showFilterGroupValuesIcon={showFilterGroupValuesIcon}
					handleShowFilterGroupValues={handleShowFilterGroupValues}
				/>
			</div>
			{
				showFilterGroupValues && (
					<FiltersFilterGroupValuesList filterGroupValues={filterGroupValues} />
				)
			}
			{
				showAddFilterSection && (
					<FiltersAddFilterGroupValue id={id} />
				)
			}
		</>
	);
};

FiltersGroupListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	displayName: PropTypes.string,
	handleFilterEdit: PropTypes.func,
	hasFilterValues: PropTypes.bool,
	handleFilterDelete: PropTypes.func
};

export default FiltersGroupListItem;
