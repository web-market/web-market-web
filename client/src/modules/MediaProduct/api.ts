import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS } from './consts';

const addMediaCategory = (data) => {
	return POST(ENDPOINTS.ADD_MEDIA_CATEGORY, data);
};

const editMediaCategory = (data) => {
	return PUT(ENDPOINTS.ADD_MEDIA_CATEGORY, data);
};

const getMediaCategories = () => {
	return GET(ENDPOINTS.GET_MEDIA_CATEGORIES);
};

const deleteMediaCategory = (id) => {
	return DELETE(`${ENDPOINTS.DELETE_MEDIA_CATEGORY}/${id}`);
};

const getMediaCategoryDetail = (id) => {
	return GET(`${ENDPOINTS.GET_MEDIA_CATEGORY}/${id}`);
};

const getMediaFilesInCategory = (id) => {
	return GET(`${ENDPOINTS.GET_FILES_IN_CATEGORY}/${id}`);
};

const deleteMediaFiles = (ids) => {
    return DELETE(ENDPOINTS.DELETE_IMAGES, { ids });
};

export {
	addMediaCategory,
	getMediaCategories,
	deleteMediaCategory,
	getMediaCategoryDetail,
	editMediaCategory,
    deleteMediaFiles,
	getMediaFilesInCategory
};
