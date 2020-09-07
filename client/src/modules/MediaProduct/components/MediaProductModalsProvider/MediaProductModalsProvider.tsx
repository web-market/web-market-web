import React, { useState } from 'react';

import { NotificationModal } from '../../../../components/NotificationModal/NotificationModal';
import MediaProductUploadFileModal from '../MediaProductUploadFileModal';
import MediaProductCategoryModal from '../MediaProductCategoryModal';
import { MediaProductModalsContext, MODALS } from './const';

export const MediaProductModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isUploadFileModalOpen, setIsUploadFileModalOpen] = useState(false);
	const [isDeleteMediaCategoryModalOpen, setIsDeleteMediaCategoryModalOpen] = useState(false);
	const [isAddMediaCategoryModalOpen, setIsAddMediaCategoryModalOpen] = useState(false);

	const modalState = {
		[MODALS.DELETE_MEDIA_CATEGORY_MODAL]: setIsDeleteMediaCategoryModalOpen,
		[MODALS.UPLOAD_FILE_MODAL]: setIsUploadFileModalOpen,
		[MODALS.MEDIA_CATEGORY_MODAL]: setIsAddMediaCategoryModalOpen,
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
			<NotificationModal
				modalData={modalData}
				isOpen={isDeleteMediaCategoryModalOpen}
				handleClose={() => closeModal(MODALS.DELETE_MEDIA_CATEGORY_MODAL)}
			/>
			<MediaProductUploadFileModal
				modalData={modalData}
				isOpen={isUploadFileModalOpen}
				handleClose={() => closeModal(MODALS.UPLOAD_FILE_MODAL)}
			/>
			<MediaProductCategoryModal
				modalData={modalData}
				isOpen={isAddMediaCategoryModalOpen}
				handleClose={() => closeModal(MODALS.MEDIA_CATEGORY_MODAL)}
			/>
		</>
	);
};
