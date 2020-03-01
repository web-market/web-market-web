import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';


const addFilterGroup = (data) => {
	return POST(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

const getFiltersGroup = () => {
    return GET(`${ENDPOINT.FILTERS_BASE_CONTROLLER}`);
};

const updateFilterGroup = (data) => {
	return PUT(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

//To do
const deleteFilterGroup = (id) => {
	return DELETE(ENDPOINT.FILTERS_BASE_CONTROLLER, id);
};

//FilterGroupValue

const addFilterGroupValue = (data) => {
	return POST(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};

const getFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.FILTER_VALUE_BASE_CONTROLLER}/${id}`);
};

const updateFiltersGroupValue = () => {
	return PUT(`${ENDPOINT.FILTER_VALUE_BASE_CONTROLLER}`);
};

//To do
const deleteFilterGroupValue = (data) => {
	return DELETE(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};

export {
    getFiltersGroup,
    addFilterGroup,
	deleteFilterGroup,
	addFilterGroupValue,
	getFilterGroupValue,
	deleteFilterGroupValue,
	updateFilterGroup
};
