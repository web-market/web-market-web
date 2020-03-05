import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';


const addFilterGroup = (data) => {
	return POST(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

const getFiltersGroup = () => {
    return GET(`${ENDPOINT.FILTERS_BASE_CONTROLLER}`);
};

const getUpdateFilterGroup = (id) => {
	return GET(`${ENDPOINT.FILTERS_BASE_CONTROLLER}/${id}`);
};

const updateFilterGroup = (data) => {
	return PUT(ENDPOINT.FILTERS_BASE_CONTROLLER, data);
};

const deleteFilterGroup = (id) => {
	return DELETE(ENDPOINT.FILTERS_BASE_CONTROLLER, id);
};

//FilterGroupValue

const addFilterGroupValue = (data) => {
	return POST(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};

const getFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.GET_FILTER_GROUP_VALUES}/${id}`);
};

const getEditFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.FILTER_VALUE_BASE_CONTROLLER}/${id}`);
};

const updateFiltersGroupValue = (data) => {
	return PUT(ENDPOINT.FILTER_VALUE_BASE_CONTROLLER, data);
};

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
	updateFilterGroup,
	getUpdateFilterGroup,
	getEditFilterGroupValue,
	updateFiltersGroupValue
};
