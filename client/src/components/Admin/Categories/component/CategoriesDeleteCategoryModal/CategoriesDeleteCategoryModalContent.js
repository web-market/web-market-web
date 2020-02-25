import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CategoriesContext } from '../../store';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

import Button from '../../../../../baseComponents/Button';
import CategoriesDeleteCategoryModalForm from './CategoriesDeleteCategoryModalForm';

const CategoriesDeleteCategoryModalContent = (
	{
		modalData,
		handleClose: handleCloseFromProps
	}
) => {
	const [isPending, setIsPending] = useState(false);
	const { forms } = useContext(FormsGlobalContext);
	const { deleteCategory } = useContext(CategoriesContext);

	const handleClose = useCallback(() => {
		handleCloseFromProps();
	}, [handleCloseFromProps]);

	const handleDeleteCategory = (values) => {
		setIsPending(true);

		deleteCategory({ id: modalData.id, ...values })
			.then(() => handleClose())
			.catch(e => {
				console.log(e);
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
			actionHandler={() => forms.DELETE_CATEGORY_FORM.submitForm()}
			label="!!Удалить"
			type="danger"
		/>
	);

	return (
		<CategoriesDeleteCategoryModalForm
			isPending={isPending}
			handleClose={handleClose}
			handleDeleteCategory={handleDeleteCategory}
			leftButtons={leftButtons}
			rightButtons={rightButtons}
			id={modalData.id}
		/>
	);
};

CategoriesDeleteCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesDeleteCategoryModalContent;
