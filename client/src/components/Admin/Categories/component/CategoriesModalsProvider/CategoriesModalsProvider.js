import React, { useState, createContext, useRef } from 'react';

import CategoriesEditCategoryModal from '../CategoriesEditCategoryModal';
import { MODALS } from '../../consts';

export const CategoriesModalsContext = createContext();

export const CategoriesModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState(null);
	const modalState = useRef({
		[MODALS.EDIT_CATEGORY_MODAL]: false
	});

	const openModal = (modalName, data) => {
		modalState.current[modalName] = true;

		if (data) setModalData(data);
	};

	const closeModal = (modalName) => {
		modalState.current[modalName] = false;

		if (modalData) setModalData(null);
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
				isOpen={modalState.current[MODALS.EDIT_CATEGORY_MODAL]}
			/>
		</>
	);
};
