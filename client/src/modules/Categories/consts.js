import { createContext } from 'react';

export const ADD_CATEGORY_FORM = 'ADD_CATEGORY_FORM';
export const EDIT_CATEGORY_FORM = 'EDIT_CATEGORY_FORM';
export const DELETE_CATEGORY_FORM = 'DELETE_CATEGORY_FORM';

export const actions = {
	ADD_CATEGORY: 'ADD_CATEGORY'
};

export const ENDPOINT = {
	ADD_CATEGORY: '/category-management/categories',
	GET_CATEGORY: '/category-management/categories',
	DELETE_CATEGORY: '/category-management/categories',
	GET_CATEGORY_LIST: '/category-management/root-categories',
	GET_ALL_CATEGORIES: '/category-management/categories/fill-dropdown',
	GET_SUB_CATEGORIES_LIST: '/category-management/root-categories',
	GET_AVAILABLE_PARENT_CATEGORIES: '/category-management/available-parent-categories/',
};

export const MODALS = {
	EDIT_CATEGORY_MODAL: 'EDIT_CATEGORY_MODAL',
	DELETE_CATEGORY_MODAL: 'DELETE_CATEGORY_MODAL'
};

export const CategoriesContext = createContext();
export const CategoriesModalsContext = createContext();
