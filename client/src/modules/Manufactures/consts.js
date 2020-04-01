import { createContext } from 'react';

export const ManufacturesContext = createContext();
export const ManufacturesModalsContext = createContext();

export const ADD_MANUFACTURE_FORM = 'ADD_MANUFACTURE_FORM';
export const EDIT_MANUFACTURE_FORM = 'EDIT_MANUFACTURE_FORM';

export const ENDPOINTS = {
	ADD_MANUFACTURE: '/manufacturer-management/manufacturers',
	GET_MANUFACTURES: '/manufacturer-management/manufacturers',
	DELETE_MANUFACTURE: '/manufacturer-management/manufacturers'
};

export const MODALS = {
	MANUFACTURE_DETAIL_MODAL: 'MANUFACTURE_DETAIL_MODAL',
	MANUFACTURE_EDIT_MODAL: 'MANUFACTURE_EDIT_MODAL',
	MANUFACTURE_DELETE_MODAL: 'MANUFACTURE_DELETE_MODAL'
};
