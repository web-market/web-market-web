import { createContext } from 'react';

export const ADD_MEDIA_CATEGORY_FORM = 'ADD_MEDIA_CATEGORY_FORM';
export const EDIT_MEDIA_CATEGORY_FORM = 'EDIT_MEDIA_CATEGORY_FORM';

export const MODALS = {
	UPLOAD_FILE_MODAL: 'UPLOAD_FILE_MODAL',
	DELETE_MEDIA_CATEGORY_MODAL: 'DELETE_MEDIA_CATEGORY_MODAL',
	MEDIA_CATEGORY_MODAL: 'MEDIA_CATEGORY_MODAL'
};

export const UPLOADERS = {
	FILE_UPLOADER: 'FILE_UPLOADER'
};

export const ENDPOINTS = {
	ADD_MEDIA_CATEGORY: '/media-folder-management/media-folder',
	DELETE_MEDIA_CATEGORY: '/media-folder-management/media-folder',
	GET_MEDIA_CATEGORIES: '/media-folder-management/media-folder-inline',
	GET_MEDIA_CATEGORY: '/media-folder-management/media-folder',
	GET_MEDIA_CATEGORY_DROP_DOWN: '/media-folder-management/media-folder/all',
	ADD_IMAGES: '/media-management/media',
	DELETE_IMAGES: '/media-management/media',
	GET_FILES_IN_CATEGORY: '/media-management/media/media-folder',
};

export const MediaProductContext = createContext();
export const MediaProductModalsContext = createContext();
