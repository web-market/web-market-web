import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import GeneralUploader from '../../../../baseComponents/Uploader';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import { UPLOADERS, ENDPOINTS } from '../../consts';

const MediaProductUploadFileModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const { upLoaders } = useContext(AppGlobalContext);

	const handleUpload = () => {
		upLoaders.FILE_UPLOADER.upload()
			.then(() => {
				handleClose();
			})
			.catch(e => console.log(e));
	};

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!Загрузите файлы"
			/>
			<ModalContent>
				<GeneralUploader
					url={ENDPOINTS.ADD_IMAGES}
					id={modalData.categoryId}
					name={UPLOADERS.FILE_UPLOADER}
				/>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={(
						<Button
							actionHandler={handleClose}
							label="!!Закрыть"
							type="secondary"
						/>
					)}
					rightButtons={(
						<Button
							actionHandler={handleUpload}
							label="!!Загрузить"
							type="primary"
						/>
					)}
				/>
			</ModalFooter>
		</>
	);
};

MediaProductUploadFileModalContent.propTypes = {
	modalData: PropTypes.object,
	handleClose: PropTypes.func
};

export default MediaProductUploadFileModalContent;
