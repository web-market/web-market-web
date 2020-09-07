import { createContext } from 'react';
import { ModalsContextPropsType } from '../../../../generalTypes';

export const MODALS = {
    ADD_STORE_MODAL: 'ADD_STORE_MODAL',
    DELETE_STORE_MODAL: 'DELETE_STORE_MODAL',
};

export const FORMS = {
    ADD_STORE_FORM: 'ADD_STORE_FORM'
};

const StoreModalsContextInitialValues = {
    openModal: () => { },
    closeModal: () => { },
};

export const StoreModalsContext = createContext<ModalsContextPropsType>(StoreModalsContextInitialValues);
