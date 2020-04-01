import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';

import ManufacturesEditModalContent from './ManufacturesEditModalContent';

const ManufacturesEditModal = (
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
					<ManufacturesEditModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};

ManufacturesEditModal.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	modalData: PropTypes.object
};

export { ManufacturesEditModal };
