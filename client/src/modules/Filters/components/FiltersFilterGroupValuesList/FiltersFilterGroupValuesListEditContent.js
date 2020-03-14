import React, { useContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import FiltersFilterGroupValuesListEditContentRightSide from './FiltersFilterGroupValuesListEditContentRightSide';
import FiltersFilterGroupValuesListEditContentLeftSide from './FiltersFilterGroupValuesListEditContentLeftSide';

import { EDIT_FILTER_GROUP_VALUE_FORM, FiltersContext } from '../../consts';

const FiltersFilterGroupValuesListEditContent = (
	{
		id,
		onEditButtonClick,
		filterGroupValueId
	}
) => {
	const {
		getEditFilterGroupValue,
		updateFiltersGroupValue,
		filterGroupValueHandler
	} = useContext(FiltersContext);

	const { forms } = useContext(FormsGlobalContext);
	const [data, setData] = useState({});

	useEffect(() => {
		getEditFilterGroupValue(id)
			.then(({ data }) => setData(data));
	}, [getEditFilterGroupValue, id]);

	const handleEditFilterGroupValue = (values) => {
		updateFiltersGroupValue({ ...values, id })
			.then(() => {
				onEditButtonClick();
				filterGroupValueHandler[filterGroupValueId]();
			});
	};

	const handleRemoteSubmit = () => {
		forms[`${EDIT_FILTER_GROUP_VALUE_FORM}-${id}`].submitForm();
	};

	const initialValues = useMemo(() => {
		return {
			value: data.value,
			sortOrder: data.sortOrder
		};
	}, [data]);

	return (
		<>
			<FiltersFilterGroupValuesListEditContentLeftSide
				id={id}
				initialValues={initialValues}
				handleEditFilterGroupValue={handleEditFilterGroupValue}
			/>
			<FiltersFilterGroupValuesListEditContentRightSide
				onEditButtonClick={onEditButtonClick}
				handleRemoteSubmit={handleRemoteSubmit}
			/>
		</>
	);
};

FiltersFilterGroupValuesListEditContent.defaultProps = {
	id: PropTypes.number,
	onEditButtonClick: PropTypes.func,
	filterGroupValueId: PropTypes.number
};

export default FiltersFilterGroupValuesListEditContent;
