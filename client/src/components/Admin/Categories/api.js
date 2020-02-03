import { GET, POST, DELETE, PUT } from '../../../utils/api';
import { ENDPOINT } from './consts';

const getAllCategories = () => {
	return GET(ENDPOINT.CATEGORY_BASE_CONTROLLER);
};

const getSubCategories = (id) => {
	return GET(`${ENDPOINT.CATEGORY_BASE_CONTROLLER}/${id}`);
};


const addCategory = (data) => {
	return POST(ENDPOINT.CATEGORY_BASE_CONTROLLER, data);
};

const deleteCategory = (id) => {
	return DELETE(`${ENDPOINT.CATEGORY_BASE_CONTROLLER}/${id}`);
};

const getCategory = (id) => {
	return GET(`${ENDPOINT.GET_CATEGORY}/${id}`);
};

const updateCategory = (id) => {
	return PUT(`${ENDPOINT.CATEGORY_BASE_CONTROLLER}/${id}`);
};

export {
	getAllCategories,
	getSubCategories,
	addCategory,
	deleteCategory,
	updateCategory,
	getCategory
};
