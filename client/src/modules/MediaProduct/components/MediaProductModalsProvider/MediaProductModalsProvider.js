import React, { useState } from 'react';

// import NotificationModal from '../../../../components/NotificationModal';
import MediaProductUploadFileModal from '../MediaProductUploadFileModal';
import { MediaProductModalsContext, MODALS } from '../../consts';

export const MediaProductModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isUploadFileModalOpen, setIsUploadFileModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const modalState = {
		//[MODALS.NOTIFICATION_MODAL]: setIsNotificationModalOpen,
		[MODALS.UPLOAD_FILE_MODAL]: setIsUploadFileModalOpen,
	};

	const openModal = (modalName, data) => {
		modalState[modalName](true);

		if (data) setModalData(data);
	};

	const closeModal = (modalName) => {
		modalState[modalName](false);

		if (modalData) setModalData({});
	};

	const modalProviderActions = {
		openModal,
		closeModal
	};

	return (
		<>
			<MediaProductModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</MediaProductModalsContext.Provider>
			{/*<NotificationModal*/}
				{/*modalData={modalData}*/}
				{/*isOpen={isNotificationModalOpen}*/}
				{/*handleClose={() => closeModal(MODALS.DELETE_FILTER_MODAL)}*/}
			{/*/>*/}
			<MediaProductUploadFileModal
				modalData={modalData}
				isOpen={isUploadFileModalOpen}
				handleClose={() => closeModal(MODALS.UPLOAD_FILE_MODAL)}
			/>
		</>
	);
};
