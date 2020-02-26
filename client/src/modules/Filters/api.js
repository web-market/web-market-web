import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';

const getFilters = () => {
    return GET(`${ENDPOINT.FILTERS_BASE_CONTROLLER}/all`);
};

const addFilter = (data) => {
    return POST(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

const deleteFilter = (id) => {
	return DELETE(`${ENDPOINT.FILTERS_BASE_CONTROLLER}/${id}`);
};

const addFilterValue = (data) => {
	return POST(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};


export {
    getFilters,
    addFilter,
	deleteFilter,
	addFilterValue
};
