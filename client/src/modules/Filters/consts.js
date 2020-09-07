import { createContext } from 'react';

export const ADD_FILTER_FORM = 'ADD_FILTER_FORM';
export const EDIT_FILTER_FORM = 'EDIT_FILTER_FORM';
export const ADD_FILTER_VALUE_FORM = 'ADD_FILTER_VALUE_FORM';
export const EDIT_FILTER_GROUP_VALUE_FORM = 'EDIT_FILTER_GROUP_VALUE_FORM';

export const ENDPOINT = {
    GET_ALL_FILTERS_GROUPS: '/filter-management/filters/',
    ADD_FILTER_GROUP: '/filter-management/filters/',
    GET_FILTER_GROUP: '/filter-management/filter/',
    UPDATE_FILTER_GROUP: '/filter-management/filters/',
	DELETE_FILTER_GROUP: '/filter-management/filters/',
	//filter groupvalues
	GET_FILTER_GROUP_VALUE: '/filter-value-management/filter-values/filter/',
	GET_SINGLE_FILTER_GROUP_VALUE: '/filter-value-management/filter-value/',
	ADD_FILTER_GROUP_VALUE: '/filter-value-management/filter-values',
	UPDATE_FILTER_GROUP_VALUE: '/filter-value-management/filter-values',
	DELETE_FILTER_GROUP_VALUE: '/filter-value-management/filter-values',
};

export const MODALS = {
	DELETE_FILTER_MODAL: 'DELETE_FILTER_MODAL',
	EDIT_FILTER_MODAL: 'EDIT_FILTER_MODAL',
};

export const FiltersContext = createContext();
export const FiltersModalsContext = createContext();
