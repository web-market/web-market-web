import { createContext } from 'react';

export const ADD_FILTER_FORM = 'ADD_FILTER_FORM';
export const EDIT_FILTER_FORM = 'EDIT_FILTER_FORM';
export const ADD_FILTER_VALUE_FORM = 'ADD_FILTER_VALUE_FORM';
export const EDIT_FILTER_GROUP_VALUE_FORM = 'EDIT_FILTER_GROUP_VALUE_FORM';

export const ENDPOINT = {
    FILTERS_BASE_CONTROLLER: '/filters/',
    FILTER_VALUE_BASE_CONTROLLER: '/filter-values/',
	GET_FILTER_GROUP_VALUES: '/filter-values/filter/',
    GET_ALL_FILTERS: '/filters/all/'
};

export const MODALS = {
	DELETE_FILTER_MODAL: 'DELETE_FILTER_MODAL',
	EDIT_FILTER_MODAL: 'EDIT_FILTER_MODAL',
};

export const FiltersContext = createContext();
export const FiltersModalsContext = createContext();
