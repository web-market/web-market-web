import React, { useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import {
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalContentInfoSection
} from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';
import MediaProductCategoryModalAddForm from './MediaProductCategoryModalAddForm';
import MediaProductCategoryModalEditForm from './MediaProductCategoryModalEditForm';
import { Typography } from '../../../../baseComponents/Typography/Typography';
import { getInitialValuesHook, getFieldsMetadataHook } from './hooks';
import { MediaProductContext } from '../../store/consts';

const MediaProductCategoryModalContent = (
	{
		categoryId,
		handleClose: handleCloseFromProps,
		categoryName,
		isSubCategory,
		initialValues,
		isEditMode
	}
) => {
	const { forms } = useContext(FormsGlobalContext);
	const {
		addMediaCategory,
		getMediaCategories,
		editMediaCategory,
		setActiveCategory
	} = useContext(MediaProductContext);
	const [isPending, setIsPending] = useState(false);

	const handleClose = useCallback(() => {
		setIsPending(false);
		handleCloseFromProps();
	}, [handleCloseFromProps]);

	const handleAddCategory = useCallback((values) => {
		setIsPending(true);

		const requestValues = isSubCategory
			? { ...values, parentFolderId: categoryId }
			: values;

		addMediaCategory(requestValues)
			.then(() => getMediaCategories())
			.catch(error => console.log(error))
			.finally(() => handleClose());
	}, [
		addMediaCategory,
		categoryId,
		getMediaCategories,
		handleClose,
		isSubCategory
	]);

	const handleEditCategory = useCallback((values) => {
		setIsPending(true);

		editMediaCategory({ ...values, id: categoryId })
			.then(() => getMediaCategories())
			.then(() => setActiveCategory(categoryId))
			.catch(error => console.log(error))
			.finally(() => handleClose());
	}, [
        setActiveCategory,
		editMediaCategory,
		categoryId,
		getMediaCategories,
		handleClose
	]);

	const modalLabel = isSubCategory ? '!! Добавить подкатегорию' : '!! Добавить категорию';

	return (
		<>
			<ModalHeader
				label={modalLabel}
				handleClose={handleCloseFromProps}
			/>
			{
				isSubCategory && (
					<ModalContentInfoSection>
						!!Родительская категоия:&nbsp;
						<Typography bold="600">
							{categoryName}
						</Typography>
					</ModalContentInfoSection>
				)
			}
			<ModalContent isPending={isPending}>
				<>
					{
						!isEditMode && (
							<MediaProductCategoryModalAddForm
								isSubCategory={isSubCategory}
								handleSubmit={handleAddCategory}
							/>
						)
					}
					{
						isEditMode && (
							<MediaProductCategoryModalEditForm
								initialValues={getInitialValuesHook(initialValues)}
								fieldsMetadata={getFieldsMetadataHook(initialValues)}
								handleSubmit={handleEditCategory}
							/>
						)
					}
				</>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={(
						<Button
							label="!закрыть"
							actionHandler={() => handleClose()}
						/>
					)}
					rightButtons={
						isEditMode ? (
							<Button
								type="primary"
								label="!редактировать"
								actionHandler={() => forms.EDIT_MEDIA_CATEGORY_FORM.submitForm()}
							/>
						) : (
							<Button
								type="primary"
								label="!добавить"
								actionHandler={() => forms.ADD_MEDIA_CATEGORY_FORM.submitForm()}
							/>
						)
					}
				/>
			</ModalFooter>
		</>
	);
};

MediaProductCategoryModalContent.defaultProps = {
	isSubCategory: false,
	isEditMode: false
};

MediaProductCategoryModalContent.propTypes = {
	handleClose: PropTypes.func,
	categoryId: PropTypes.number,
	isSubCategory: PropTypes.bool,
	isEditMode: PropTypes.bool,
	categoryName: PropTypes.string
};

export default MediaProductCategoryModalContent;
