import React, { useState } from 'react';

import CategoriesEditCategoryModal from '../CategoriesEditCategoryModal';
import CategoriesDeleteCategoryModal from '../CategoriesDeleteCategoryModal';
import { MODALS, CategoriesModalsContext } from '../../consts';

export const CategoriesModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const modalState = {
		[MODALS.EDIT_CATEGORY_MODAL]: setIsEditModalOpen,
		[MODALS.DELETE_CATEGORY_MODAL]: setIsDeleteModalOpen
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
			<CategoriesDeleteCategoryModal
				handleClose={() => closeModal(MODALS.DELETE_CATEGORY_MODAL)}
				modalData={modalData}
				isOpen={isDeleteModalOpen}
			/>
		</>
	);
};
