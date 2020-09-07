import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINT } from './consts';

const getFiltersGroup = () => {
    return GET(`${ENDPOINT.GET_ALL_FILTERS_GROUPS}`);
};

const addFilterGroup = (data) => {
	return POST(ENDPOINT.ADD_FILTER_GROUP, data);
};

const getFilterGroup = (id) => {
	return GET(`${ENDPOINT.GET_FILTER_GROUP}${id}`);
};

const updateFilterGroup = (data) => {
	return PUT(ENDPOINT.UPDATE_FILTER_GROUP, data);
};

const deleteFilterGroup = (id) => {
	return DELETE(ENDPOINT.DELETE_FILTER_GROUP, id);
};

//FilterGroupValue

const addFilterGroupValue = (data) => {
	return POST(ENDPOINT.ADD_FILTER_GROUP_VALUE, data);
};

const getFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.GET_FILTER_GROUP_VALUE}${id}`);
};

const getEditFilterGroupValue = (id) => {
	return GET(`${ENDPOINT.GET_SINGLE_FILTER_GROUP_VALUE}${id}`);
};

const updateFiltersGroupValue = (data) => {
	return PUT(ENDPOINT.UPDATE_FILTER_GROUP_VALUE, data);
};

const deleteFilterGroupValue = (data) => {
	return DELETE(ENDPOINT.DELETE_FILTER_GROUP_VALUE, data);
};

export {
    getFiltersGroup,
    addFilterGroup,
	deleteFilterGroup,
	addFilterGroupValue,
	getFilterGroupValue,
	deleteFilterGroupValue,
	updateFilterGroup,
	getFilterGroup,
	getEditFilterGroupValue,
	updateFiltersGroupValue
};
