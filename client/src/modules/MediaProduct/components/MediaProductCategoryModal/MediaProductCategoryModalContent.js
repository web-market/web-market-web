import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import {
	ModalHeader,
	ModalFooter,
	ModalContent,
	ModalContentInfoSection
} from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';
import MediaProductCategoryModalForm from './MediaProductCategoryModalForm';
import { MediaProductContext } from '../../consts';
import { Typography } from '../../../../baseComponents/Typography/Typography';

const MediaProductCategoryModalContent = (
	{
		categoryId,
		handleClose: handleCloseFromProps,
		categoryName,
		isSubCategory
	}
) => {
	const { forms } = useContext(FormsGlobalContext);
	const { addMediaCategory, getMediaCategories } = useContext(MediaProductContext);
	const [isPending, setIsPending] = useState(false);

	const handleAddMediaCategory = (values) => {
		setIsPending(true);

		const requestValues = isSubCategory
			? { ...values, parentFolderId: categoryId }
			: values;

		addMediaCategory(requestValues)
			.then(() => getMediaCategories())
			.catch(error => console.log(error))
			.finally(() => handleClose());
	};

	const handleClose = () => {
		setIsPending(false);
		handleCloseFromProps();
	};

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
						<Typography>
							{categoryName}
						</Typography>
					</ModalContentInfoSection>
				)
			}
			<ModalContent isPending={isPending}>
				<MediaProductCategoryModalForm
					isSubCategory={isSubCategory}
					handleAddMediaCategory={handleAddMediaCategory}
				/>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={(
						<Button
							label="!закрыть"
							actionHandler={() => handleClose()}
						/>
					)}
					rightButtons={(
						<Button
							type="primary"
							label="!добавить"
							actionHandler={() => forms.ADD_MEDIA_CATEGORY_FORM.submitForm()}
						/>
					)}
				/>
			</ModalFooter>
		</>
	);
};

MediaProductCategoryModalContent.defaultProps = {
	isSubCategory: false
};

MediaProductCategoryModalContent.propTypes = {
	handleClose: PropTypes.func,
	categoryId: PropTypes.number,
	isSubCategory: PropTypes.bool,
	categoryName: PropTypes.string
};

export default MediaProductCategoryModalContent;
