import { createContext } from 'react';
import { ModalsContextPropsType } from '../../../../../generalTypes';
import { modalsContextInitialValues } from '../../../../../generalConst';

export const MODALS = {
    ADD_SUPPLY_MODAL: 'ADD_SUPPLY_MODAL',
    DELETE_SUPPLY_MODAL: 'DELETE_SUPPLY_MODAL',
};

export const FORMS = {
    ADD_SUPPLY_FORM: 'ADD_SUPPLY_FORM'
};

export const SupplyModalsContext = createContext<ModalsContextPropsType>(modalsContextInitialValues);
