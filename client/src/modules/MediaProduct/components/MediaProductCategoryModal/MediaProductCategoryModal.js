import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import MediaProductCategoryModalContent from './MediaProductCategoryModalContent';

const MediaProductCategoryModal = (
	{
		isOpen,
		modalData,
		handleClose
	}
) => {
	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<MediaProductCategoryModalContent
						{...renderData}
						categoryId={modalData.categoryId}
						categoryName={modalData.categoryName}
						isSubCategory={modalData.isSubCategory}
						initialValues={modalData.initialValues}
						isEditMode={modalData.isEditMode}
					/>
				);
			}}
		/>
	);
};

MediaProductCategoryModal.propTypes = {
	isOpen: PropTypes.bool,
	modalData: PropTypes.object,
	handleClose: PropTypes.func
};

export { MediaProductCategoryModal };
