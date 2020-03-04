import React, { useState, useMemo, useContext, useEffect, useCallback } from 'react';
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
	const { getFilterGroupValue, setFilterGroupValueHandler } = useContext(FiltersContext);

	const [filterGroupValues, setFilterGroupValues] = useState([]);
	const [showFilterGroupValues, setShowFilterGroupValues] = useState(false);
	const [shoAddFilterGroupValueForm, setShoAddFilterGroupValueForm] = useState(false);

	const handleGetFilterGroupValue = useCallback(() => {
		getFilterGroupValue(id)
			.then(({ data }) => {
				setFilterGroupValues(data);
			});
	}, [getFilterGroupValue, id]);

	useEffect(() => {
		setFilterGroupValueHandler(handleGetFilterGroupValue, id);
	}, []);

	const handleShoAddFilterGroupValueForm = () => {
		setShoAddFilterGroupValueForm(!shoAddFilterGroupValueForm);
	};

	const handleShowFilterGroupValues = () => {
		if (!showFilterGroupValues) {
			handleGetFilterGroupValue();
		}

		setShowFilterGroupValues(!showFilterGroupValues);
	};

	const addFilterGroupValuesIcon = useMemo(() => {
		return shoAddFilterGroupValueForm ? minus : plus;
	}, [shoAddFilterGroupValueForm]);

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
					showFilterGroupValuesIcon={showFilterGroupValuesIcon}
					handleShowFilterGroupValues={handleShowFilterGroupValues}
					handleShoAddFilterGroupValueForm={handleShoAddFilterGroupValueForm}
				/>
			</div>
			{
				showFilterGroupValues && (
					<FiltersFilterGroupValuesList
						filterGroupValueId={id}
						filterGroupValues={filterGroupValues}
					/>
				)
			}
			{
				shoAddFilterGroupValueForm && (
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
