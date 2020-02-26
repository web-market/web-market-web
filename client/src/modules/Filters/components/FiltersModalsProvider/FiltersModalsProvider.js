import React, { useState, createContext } from 'react';

import NotificationModal from '../../../../components/NotificationModal';
import FiltersEditFilterModal from '../FiltersEditFilterModal';
import { MODALS } from '../../consts';

export const FiltersModalsContext = createContext();

export const FiltersModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const modalState = {
		[MODALS.DELETE_FILTER_MODAL]: setIsDeleteModalOpen,
		[MODALS.EDIT_FILTER_MODAL]: setIsEditModalOpen,
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
			<FiltersModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</FiltersModalsContext.Provider>
			<NotificationModal
				modalData={modalData}
				isOpen={isDeleteModalOpen}
				handleClose={() => closeModal(MODALS.DELETE_FILTER_MODAL)}
			/>
			<FiltersEditFilterModal
				modalData={modalData}
				isOpen={isEditModalOpen}
				handleClose={() => closeModal(MODALS.EDIT_FILTER_MODAL)}
			/>
		</>
	);
};
