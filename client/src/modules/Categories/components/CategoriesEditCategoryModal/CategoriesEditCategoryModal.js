import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import CategoriesEditCategoryModalContent from './CategoriesEditCategoryModalContent';

const CategoriesEditCategoryModal = (
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
					<CategoriesEditCategoryModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};


CategoriesEditCategoryModal.propTypes = {
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool,
	modalData: PropTypes.object
};

export { CategoriesEditCategoryModal };
