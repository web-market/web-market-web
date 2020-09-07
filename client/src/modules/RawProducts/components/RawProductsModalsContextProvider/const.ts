import { createContext } from 'react';
import { ModalsContextPropsType } from '../../../../generalTypes';

export const MODALS = {
    DETAIL_RAW_PRODUCTS_MODAL: 'DETAIL_RAW_PRODUCTS_MODAL',
    DELETE_RAW_PRODUCTS_MODAL: 'DELETE_RAW_PRODUCTS_MODAL',
    EDIT_RAW_PRODUCTS_MODAL: 'EDIT_RAW_PRODUCTS_MODAL',
};

const StoreModalsContextInitialValues = {
    openModal: () => { },
    closeModal: () => { },
};

export const RawProductsModalsContext = createContext<ModalsContextPropsType>(StoreModalsContextInitialValues);
