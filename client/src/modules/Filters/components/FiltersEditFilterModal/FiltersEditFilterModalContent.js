import React, { useContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import FiltersEditFilterModalForm from './FiltersEditFilterModalForm';
import Button from '../../../../baseComponents/Button';

import { FiltersContext } from '../../consts';

const FiltersEditFilterModalContent = (
	{
		modalData,
		handleClose: handleCloseFromProps
	}
) => {
	const { forms } = useContext(FormsGlobalContext);
	const { getFiltersList, updateFilterGroup, getUpdateFilterGroup } = useContext(FiltersContext);
	const [data, setData] = useState({});

	useEffect(() => {
		getUpdateFilterGroup(modalData.id)
			.then(({ data }) => setData(data));
	}, []);

	const handleClose = () => {
		handleCloseFromProps();
	};

	const handleUpdateFilter = (values) => {
		return updateFilterGroup({ ...values, id: modalData.id })
			.then(() => {
				getFiltersList();
				handleClose();
		});
	};

	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={() => forms.EDIT_FILTER_FORM.submitForm()}
			label="!!Редактировать"
			type="primary"
		/>
	);

	const initialValues = useMemo(() => {
		return {
			sortOrder: data.sortOrder,
			name: data.name,
			displayName: data.displayName
		};
	}, [data]);

	return (
		<FiltersEditFilterModalForm
			handleClose={handleClose}
			leftButtons={leftButtons}
			rightButtons={rightButtons}
			initialValues={initialValues}
			handleUpdateFilter={handleUpdateFilter}
		/>
	);
};

FiltersEditFilterModalContent.propTypes = {
	modalData: PropTypes.object
};

export default FiltersEditFilterModalContent;
