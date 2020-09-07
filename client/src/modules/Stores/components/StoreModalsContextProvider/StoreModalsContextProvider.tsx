import React, { useState } from 'react';

import { StoreModalsContext, MODALS } from './const';
import { StoreAddModal } from '../StoreAddModal/StoreAddModal';
import { NotificationModal } from '../../../../components/NotificationModal/NotificationModal';

const StoreModalsContextProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isAddStoreModalOpen, setIsAddStoreModalOpen] = useState(false);
	const [isDeleteStoreModalOpen, setIsDeleteStoreModalOpen] = useState(false);

	const modalState = {
		[MODALS.ADD_STORE_MODAL]: setIsAddStoreModalOpen,
		[MODALS.DELETE_STORE_MODAL]: setIsDeleteStoreModalOpen,
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
			<StoreModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</StoreModalsContext.Provider>
            <StoreAddModal
                isOpen={isAddStoreModalOpen}
                handleClose={() => closeModal(MODALS.ADD_STORE_MODAL)}
            />
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteStoreModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_STORE_MODAL)}
            />
		</>
	);
};

export { StoreModalsContextProvider };
