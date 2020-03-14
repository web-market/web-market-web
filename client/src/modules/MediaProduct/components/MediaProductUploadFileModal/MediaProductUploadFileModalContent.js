import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import GeneralUploader from '../../../../baseComponents/Uploader';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import { UPLOADERS } from '../../consts';

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

	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={handleUpload}
			label="!!Загрузить"
			type="primary"
		/>
	);

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!Загрузите файлы"
			/>
			<ModalContent>
				<GeneralUploader
					url="test-url"
					id={modalData.categoryId}
					name={UPLOADERS.FILE_UPLOADER}
				/>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
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
