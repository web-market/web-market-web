import { GET, POST, DELETE, PUT } from '../../utils/api';
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

const deleteCategory = (data) => {
	return DELETE(ENDPOINT.CATEGORY_BASE_CONTROLLER, data);
};

const getCategory = (id) => {
	return GET(`${ENDPOINT.GET_CATEGORY}/${id}`);
};

const updateCategory = (data) => {
	return PUT(ENDPOINT.CATEGORY_BASE_CONTROLLER, data);
};

export {
	getCategory,
	addCategory,
	updateCategory,
	deleteCategory,
	getAllCategories,
	getSubCategories
};
