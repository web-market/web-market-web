import { GET, POST } from '../../../baseComponents/Api';
import { ENDPOINT } from './consts';

const getAllCategories = () => {
	return GET(ENDPOINT.GET_ALL_CATEGORIES);
};

const addCategory = (data) => {
	return POST(ENDPOINT.ADD_CATEGORY, data);
};

export {
	getAllCategories,
	addCategory
};
