import React, { useState } from 'react';

import NotificationModal from '../../../../components/NotificationModal';

import ManufacturesDetailModal from '../ManufacturesDetailModal';
import ManufacturesEditModal from '../ManufacturesEditModal';

import { MODALS, ManufacturesModalsContext } from '../../consts';

export const ManufacturesModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const modalState = {
		[MODALS.MANUFACTURE_DETAIL_MODAL]: setIsDetailModalOpen,
		[MODALS.MANUFACTURE_EDIT_MODAL]: setIsEditModalOpen,
		[MODALS.MANUFACTURE_DELETE_MODAL]: setIsDeleteModalOpen,
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
			<ManufacturesModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</ManufacturesModalsContext.Provider>
			<NotificationModal
				modalData={modalData}
				isOpen={isDeleteModalOpen}
				handleClose={() => closeModal(MODALS.MANUFACTURE_DELETE_MODAL)}
			/>
			<ManufacturesDetailModal
				modalData={modalData}
				isOpen={isDetailModalOpen}
				handleClose={() => closeModal(MODALS.MANUFACTURE_DETAIL_MODAL)}
			/>
			<ManufacturesEditModal
				modalData={modalData}
				isOpen={isEditModalOpen}
				handleClose={() => closeModal(MODALS.MANUFACTURE_EDIT_MODAL)}
			/>
		</>
	);
};
