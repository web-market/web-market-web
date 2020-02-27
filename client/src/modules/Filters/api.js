import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';

const getFiltersGroup = () => {
    return GET(`${ENDPOINT.FILTERS_BASE_CONTROLLER}/all`);
};

const addFilterGroup = (data) => {
    return POST(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

const deleteFilterGroup = (id) => {
	return DELETE(`${ENDPOINT.FILTERS_BASE_CONTROLLER}/${id}`);
};

const addFilterValueGroup = (data) => {
	return POST(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};

//FilterGroupValue
const getFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.CREATE_FILTER_GROUP_VALUE}/${id}`);
};

const addFilterGroupValue = (data) => {
	return POST(ENDPOINT.CREATE_FILTER_GROUP_VALUE, data);
};


export {
    getFiltersGroup,
    addFilterGroup,
	deleteFilterGroup,
	addFilterValueGroup,
	addFilterGroupValue,
	getFilterGroupValue
};
