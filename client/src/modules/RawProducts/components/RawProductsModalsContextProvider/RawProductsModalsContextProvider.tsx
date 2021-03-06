import React, { useState } from 'react';

import { RawProductsModalsContext, MODALS } from './const';
import { NotificationModal } from '../../../../components/NotificationModal/NotificationModal';
import { RawProductsDetailModal } from '../RawProductsDetailModal/RawProductsDetailModal';
import { RawProductsEditModal } from '../RawProductsEditModal/RawProductsDetailModal';

const RawProductsModalsContextProvider = ({ children }) => {
	const [modalData, setModalData] = useState({});
	const [isDetailRawProductOpen, setIsDetailRawProductOpen] = useState(false);
	const [isDeleteRawProductModalOpen, setIsDeleteRawProductModalOpen] = useState(false);
	const [isEditRawProductModalOpen, setIsEditRawProductModalOpen] = useState(false);

	const modalState = {
		[MODALS.DETAIL_MODEL_MODAL]: setIsDetailRawProductOpen,
		[MODALS.DELETE_MODEL_MODAL]: setIsDeleteRawProductModalOpen,
		[MODALS.EDIT_MODEL_MODAL]: setIsEditRawProductModalOpen,
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
			<RawProductsModalsContext.Provider value={{ ...modalProviderActions }}>
				{ children }
			</RawProductsModalsContext.Provider>
            <NotificationModal
                modalData={modalData}
                isOpen={isDeleteRawProductModalOpen}
                handleClose={() => closeModal(MODALS.DELETE_MODEL_MODAL)}
            />
            <RawProductsDetailModal
                isOpen={isDetailRawProductOpen}
                modalData={modalData}
                handleClose={() => closeModal(MODALS.DETAIL_MODEL_MODAL)}
            />
            <RawProductsEditModal
                isOpen={isEditRawProductModalOpen}
                modalData={modalData}
                handleClose={() => closeModal(MODALS.EDIT_MODEL_MODAL)}
            />
		</>
	);
};

export { RawProductsModalsContextProvider };
