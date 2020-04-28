import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS } from './consts';

const addMediaCategory = (data) => {
	return POST(ENDPOINTS.ADD_MEDIA_CATEGORY, data);
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


export {
	addMediaCategory,
	getMediaCategories,
	deleteMediaCategory,
	getMediaCategoryDetail
};
