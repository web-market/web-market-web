import { createContext } from 'react';
import { AppGlobalContextTypes } from './types';

export const initialState = {
	upLoaders: {},
	notifications: [],
    showNotification: () => {},
    showOverlayCloak: () => {},
    removeNotification: () => {},
    handleOverlayClose: () => {},
    setHandleOverlayClose: () => {},
    handleShowOverlayCloak: () => {},
    addUploaderToGlobalContext: () => {},
    removeUploaderFromGlobalContext: () => {},
};

export const AppGlobalContext = createContext<AppGlobalContextTypes>(initialState);

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const ADD_UPLOADER_TO_GLOBAL_CONTEXT = 'ADD_UPLOADER_TO_GLOBAL_CONTEXT';
export const REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT = 'REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT';
