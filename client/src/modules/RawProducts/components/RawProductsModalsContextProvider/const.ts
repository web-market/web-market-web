import { createContext } from 'react';
import { ModalsContextPropsType } from '../../../../generalTypes';

export const MODALS = {
    DETAIL_MODEL_MODAL: 'DETAIL_MODEL_MODAL',
    DELETE_MODEL_MODAL: 'DELETE_MODEL_MODAL',
    EDIT_MODEL_MODAL: 'EDIT_MODEL_MODAL',
};

const StoreModalsContextInitialValues = {
    openModal: () => { },
    closeModal: () => { },
};

export const RawProductsModalsContext = createContext<ModalsContextPropsType>(StoreModalsContextInitialValues);
