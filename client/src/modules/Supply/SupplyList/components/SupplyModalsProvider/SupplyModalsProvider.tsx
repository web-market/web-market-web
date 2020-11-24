import React, { useState } from 'react';

import { SupplyModalsContext, MODALS } from './const';
import { NotificationModal } from '../../../../../components/NotificationModal/NotificationModal';

const SupplyModalsProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isDeleteSupplyModalOpen, setIsDeleteSupplyModalOpen] = useState(false);

	const modalState = {
		[MODALS.DELETE_SUPPLY_MODAL]: setIsDeleteSupplyModalOpen,
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
			<SupplyModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</SupplyModalsContext.Provider>
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteSupplyModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_SUPPLY_MODAL)}
            />
		</>
	);
};

export { SupplyModalsProvider };
