import { createContext } from 'react';

export const ListContext = createContext({
	listName: ''
});

export const SET_LIST_NAME = 'SET_LIST_NAME';
export const SET_LIST_INITIALS = 'SET_LIST_INITIALS';
export const UPDATE_LIST_ITEM_STATE = 'UPDATE_LIST_ITEM_STATE';
