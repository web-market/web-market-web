import { createContext } from 'react';

export const initialState = {
	upLoaders: [],
	notifications: [],
};

export const AppGlobalContext = createContext(initialState);

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const ADD_UPLOADER_TO_GLOBAL_CONTEXT = 'ADD_UPLOADER_TO_GLOBAL_CONTEXT';
export const REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT = 'REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT';
