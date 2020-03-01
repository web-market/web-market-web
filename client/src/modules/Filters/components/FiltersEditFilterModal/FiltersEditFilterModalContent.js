import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { FiltersContext } from '../../store';

import FiltersEditFilterModalForm from './FiltersEditFilterModalForm';
import Button from '../../../../baseComponents/Button';

const FiltersEditFilterModalContent = (
	{
		modalData,
		handleClose: handleCloseFromProps
	}
) => {
	const { forms } = useContext(FormsGlobalContext);
	const { getFiltersList, updateFilterGroup } = useContext(FiltersContext);

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

	return (
		<FiltersEditFilterModalForm
			handleClose={handleClose}
			leftButtons={leftButtons}
			rightButtons={rightButtons}
			initialValues={{}}
			handleUpdateFilter={handleUpdateFilter}
		/>
	);
};

FiltersEditFilterModalContent.propTypes = {
	modalData: PropTypes.object
};

export default FiltersEditFilterModalContent;
