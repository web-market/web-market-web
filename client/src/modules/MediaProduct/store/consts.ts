import { createContext } from 'react';
import { MediaProductContextPropsType } from './types';

const SET_PENDING = 'SET_PENDING';
const SET_ACTIVE_CATEGORY_ID = 'SET_ACTIVE_CATEGORY_ID';
const SET_MEDIA_FILES = 'SET_MEDIA_FILES';
const SET_ACTIVE_CATEGORY_NAME = 'SET_ACTIVE_CATEGORY_NAME';
const SET_MEDIA_PRODUCT_CATEGORIES = 'SET_MEDIA_PRODUCT_CATEGORIES';
const SET_SELECTED_PRODUCT_IMAGE_ID = 'SET_SELECTED_PRODUCT_IMAGE_ID';
const DELETE_SELECTED_PRODUCT_IMAGE_ID = 'DELETE_SELECTED_PRODUCT_IMAGE_ID';
const MEDIA_PRODUCT_IMAGES_GRID_LAYOUT = 'MEDIA_PRODUCT_IMAGES_GRID_LAYOUT';

export {
	SET_PENDING,
    SET_MEDIA_FILES,
	SET_ACTIVE_CATEGORY_ID,
	SET_ACTIVE_CATEGORY_NAME,
	SET_MEDIA_PRODUCT_CATEGORIES,
	SET_SELECTED_PRODUCT_IMAGE_ID,
	DELETE_SELECTED_PRODUCT_IMAGE_ID,
	MEDIA_PRODUCT_IMAGES_GRID_LAYOUT
};

export const initialState = {
    selectedImageIds: [],
    mediaFiles: [],
    activeCategoryId: null,
    activeCategoryName: null,
    mediaProductGrisLayout: false,
    categories: [],
    pending: false,
    images: [],
    addMediaCategory: () => Promise.resolve(),
    getMediaFilesInCategory: () => Promise.resolve(),
    setActiveCategory: () => {},
    setSelectedImageId: () => {},
    getMediaCategories: () => Promise.resolve(),
    editMediaCategory: () => Promise.resolve(),
    deleteMediaCategory: () => Promise.resolve(),
    deleteSelectedImageId: () => {},
    setMediaProductLayout: () => {},
    getMediaCategoryDetail: () => Promise.resolve(),
};

export const MediaProductContext = createContext<MediaProductContextPropsType>(initialState);
