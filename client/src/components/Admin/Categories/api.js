import { GET, POST, DELETE } from '../../../baseComponents/Api';
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

export {
	getAllCategories,
	getSubCategories,
	addCategory,
	deleteCategory
};
