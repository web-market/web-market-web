import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../baseComponents/Modal';
import MediaProductUploadFileModalContent from './MediaProductUploadFileModalContent';

const MediaProductUploadFileModal = (
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
					<MediaProductUploadFileModalContent
						{...renderData}
						modalData={modalData}
					/>
				);
			}}
		/>
	);
};

MediaProductUploadFileModal.propTypes = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	modalData: PropTypes.object
};

export { MediaProductUploadFileModal };
