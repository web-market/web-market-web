import React, { useState, createContext } from 'react';

import CategoriesEditCategoryModal from '../CategoriesEditCategoryModal';
import { MODALS } from '../../consts';

export const CategoriesModalsContext = createContext();

export const CategoriesModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const modalState = {
		[MODALS.EDIT_CATEGORY_MODAL]: setIsEditModalOpen
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
			<CategoriesModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</CategoriesModalsContext.Provider>
			<CategoriesEditCategoryModal
				handleClose={() => closeModal(MODALS.EDIT_CATEGORY_MODAL)}
				modalData={modalData}
				isOpen={isEditModalOpen}
			/>
		</>
	);
};
