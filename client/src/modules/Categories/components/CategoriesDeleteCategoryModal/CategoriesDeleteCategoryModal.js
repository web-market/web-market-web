import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import CategoriesDeleteCategoryModalContent from './CategoriesDeleteCategoryModalContent';

const CategoriesDeleteCategoryModal = (
	{
		handleClose,
		isOpen,
		modalData
	}
) => {
	return (
		<Modal
			size="small"
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<CategoriesDeleteCategoryModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};


CategoriesDeleteCategoryModal.propTypes = {
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool,
	modalData: PropTypes.object
};

export { CategoriesDeleteCategoryModal };
