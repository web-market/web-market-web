import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../../baseComponents/Modal';
import CategoriesEditCategoryModalContent from './CategoriesEditCategoryModalContent';

const CategoriesEditCategoryModal = (
	{
		handleClose,
		isOpen,
		modalData
	}
) => {
	return (
		<Modal
			handleClose={handleClose}
			isOpen={isOpen}
			render={renderData => <CategoriesEditCategoryModalContent {...renderData} modalData={modalData} />}
		/>
	);
};


CategoriesEditCategoryModal.propTypes = {
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool
};

export { CategoriesEditCategoryModal };
