import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';

import ManufacturesDetailModalContent from './ManufacturesDetailModalContent';

const ManufacturesDetailModal = (
	{
		isOpen,
		modalData,
		handleClose
	}
) => {
	return (
		<Modal
			size="large"
			isOpen={isOpen}
			handleClose={handleClose}
			render={renderData => {
				return (
					<ManufacturesDetailModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};

ManufacturesDetailModal.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	modalData: PropTypes.object
};

export { ManufacturesDetailModal };
