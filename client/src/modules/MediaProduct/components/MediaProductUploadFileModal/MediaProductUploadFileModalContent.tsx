import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import GeneralUploader from '../../../../baseComponents/Uploader';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';

import { UPLOADERS, ENDPOINTS } from '../../consts';
import { MediaProductContext } from '../../store/consts';

const MediaProductUploadFileModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const { upLoaders, showNotification } = useContext(AppGlobalContext);
	const { activeCategoryId, getMediaFilesInCategory } = useContext(MediaProductContext);
	const [isPending, setIsPending] = useState(false);

	const handleUpload = () => {
        setIsPending(true);

		upLoaders.FILE_UPLOADER.upload()
            .then(() => getMediaFilesInCategory(activeCategoryId))
			.then(() => {
				handleClose();
                showNotification({
                    message: '!!Изображения(е) добавлены'
                });
                setIsPending(false);
			})
			.catch(e => {
                console.log(e);
                setIsPending(false);
            });
	};

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="!!Загрузите файлы"
			/>
			<ModalContent
                isPending={isPending}
			>
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
