import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { CategoriesContext } from '../../consts';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { Button } from '../../../../baseComponents/Button/Button';
import CategoriesEditCategoryModalForm from './CategoriesEditCategoryModalForm';
import { isNull } from '../../../../utils';

const CategoriesEditCategoryModalContent = (
	{
		modalData,
		handleClose: handleCloseFromProps
	}
) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { forms } = useContext(FormsGlobalContext);

	const { updateCategory, getCategoryAPI } = useContext(CategoriesContext);

	const handleClose = useCallback(() => {
		setData(null);
		handleCloseFromProps();
	}, [handleCloseFromProps]);

	useEffect(() => {
		setIsPending(true);

		getCategoryAPI(modalData.id)
			.then(({ data }) => setData(data))
			.catch(e => {
				console.log(e);
				handleClose();
			})
			.finally(() => setIsPending(false));
	}, []);

	const handleUpdateCategory = (values) => {
		setIsPending(true);

		updateCategory({ ...values, id: modalData.id })
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
			actionHandler={() => forms.EDIT_CATEGORY_FORM.submitForm()}
			label="!!Редактировать"
			type="primary"
		/>
	);

	const initialValues = useMemo(() => {
		if (isNull(data)) return null;

		const {
			name,
			sortOrder,
			color,
			isActive,
			parentCategory
			} = data;

		const parentCategoryId = isNull(parentCategory) ? null : parentCategory.id;

		return {
			name,
			sortOrder,
			color,
			isActive,
			parentCategoryId
		};
	}, [data]);

	const fieldsMetadata = useMemo(() => {
		if (isNull(data) || isNull(data.parentCategory)) {
			return {
				parentCategoryMetadata: {
					displayValue: ''
				}
			};
		}

		const {
			parentCategory
		} = data;

		return {
			parentCategoryMetadata: {
				displayValue: parentCategory.name
			}
		};
	}, [data]);

	return (
		<CategoriesEditCategoryModalForm
			id={modalData.id}
			isPending={isPending}
			leftButtons={leftButtons}
			handleClose={handleClose}
			rightButtons={rightButtons}
			initialValues={initialValues}
			fieldsMetadata={fieldsMetadata}
			handleUpdateCategory={handleUpdateCategory}
		/>
	);
};

CategoriesEditCategoryModalContent.propTypes = {
	modalData: PropTypes.object
};

export default CategoriesEditCategoryModalContent;
