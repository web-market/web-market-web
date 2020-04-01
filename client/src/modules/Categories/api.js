import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';

const getAllCategories = () => {
	return GET(ENDPOINT.GET_CATEGORY_LIST);
};

const getSubCategories = (id) => {
	return GET(`${ENDPOINT.GET_SUB_CATEGORIES_LIST}/${id}`);
};

const addCategory = (data) => {
	return POST(ENDPOINT.ADD_CATEGORY, data);
};

const deleteCategory = (data) => {
	return DELETE(ENDPOINT.DELETE_CATEGORY, data);
};

const getCategory = (id) => {
	return GET(`${ENDPOINT.GET_CATEGORY}/${id}`);
};

const updateCategory = (data) => {
	return PUT(ENDPOINT.ADD_CATEGORY, data);
};

export {
	getCategory,
	addCategory,
	updateCategory,
	deleteCategory,
	getAllCategories,
	getSubCategories
};
