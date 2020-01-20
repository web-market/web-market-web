import { GET, POST } from '../../../baseComponents/Api';
import { ENDPOINT } from './consts';

const getAllCategories = () => {
	return GET(ENDPOINT.GET_ALL_CATEGORIES);
};

const getSubCategories = (id) => {
	return GET(`${ENDPOINT.CATEGORY_BASE_CONTROLLER}?id=${id}`);
};


const addCategory = (data) => {
	return POST(ENDPOINT.CATEGORY_BASE_CONTROLLER, data);
};

export {
	getAllCategories,
	getSubCategories,
	addCategory
};
