import React, { useState, useMemo, useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import FiltersAddFilterGroupValue from '../FiltersAddFilterGroupValue';
import FiltersFilterGroupValuesList from '../FiltersFilterGroupValuesList';
import FiltersGroupListItemLeftSide from './FiltersGroupListItemLeftSide';
import FiltersGroupListItemRightSide from './FiltersGroupListItemRightSide';

import { plus, minus, chevronDown, chevronUp } from '../../../../icons';
import classes from './styles/index.scss';

import { FiltersContext } from '../../consts';

const FiltersGroupListItem = (
	{
		id,
		name,
		actions,
		displayName,
		hasFilterValues,
		handleFilterEdit,
		handleFilterDelete
	}
) => {
	const {
		getFilterGroupValue,
		hasFilterGroupValues,
		setFilterGroupHasValue,
		setFilterGroupValueHandler
	} = useContext(FiltersContext);

	const [filterGroupValues, setFilterGroupValues] = useState([]);
	const [showFilterGroupValues, setShowFilterGroupValues] = useState(false);
	const [shoAddFilterGroupValueForm, setShoAddFilterGroupValueForm] = useState(false);

	const handleGetFilterGroupValue = useCallback(() => {
		return getFilterGroupValue(id)
			.then(({ data }) => {
				setFilterGroupValues(data);

				setFilterGroupHasValue(true, id);

				return data;
			});
	}, [getFilterGroupValue, id, setFilterGroupHasValue]);

	useEffect(() => {
		setFilterGroupValueHandler(handleGetFilterGroupValue, id);
	}, []);

	useEffect(() => {
		setFilterGroupHasValue(hasFilterValues, id);
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
				<FiltersGroupListItemRightSide
					id={id}
					actions={actions}
					handleFilterEdit={handleFilterEdit}
					handleFilterDelete={handleFilterDelete}
					addFilterGroupValuesIcon={addFilterGroupValuesIcon}
					showFilterGroupValuesIcon={showFilterGroupValuesIcon}
					handleShowFilterGroupValues={handleShowFilterGroupValues}
					handleShoAddFilterGroupValueForm={handleShoAddFilterGroupValueForm}
				/>
			</div>
			{
				(showFilterGroupValues && hasFilterGroupValues[id]) && (
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
	actions: PropTypes.array,
	displayName: PropTypes.string,
	handleFilterEdit: PropTypes.func,
	hasFilterValues: PropTypes.bool,
	handleFilterDelete: PropTypes.func
};

export default FiltersGroupListItem;
