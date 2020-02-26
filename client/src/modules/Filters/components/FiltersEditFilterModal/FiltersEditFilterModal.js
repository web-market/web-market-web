import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import FiltersEditFilterModalContent from './FiltersEditFilterModalContent';

const FiltersEditFilterModal = (
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
					<FiltersEditFilterModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};

FiltersEditFilterModal.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	modalData: PropTypes.object
};

export { FiltersEditFilterModal };
