import { createContext } from 'react';

export const ADD_MEDIA_CATEGORY_FORM = 'ADD_MEDIA_CATEGORY_FORM';

export const MODALS = {
	UPLOAD_FILE_MODAL: 'UPLOAD_FILE_MODAL'
};

export const UPLOADERS = {
	FILE_UPLOADER: 'FILE_UPLOADER'
};

export const MediaProductContext = createContext();
export const MediaProductModalsContext = createContext();
