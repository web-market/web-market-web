import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS } from './consts';

const getAllManufactures = () => {
	return GET(ENDPOINTS.GET_MANUFACTURES);
};

const addManufacture = (data) => {
	return POST(ENDPOINTS.GET_MANUFACTURES, data);
};

const updateManufacture = (data) => {
	return PUT(ENDPOINTS.GET_MANUFACTURES, data);
};

const deleteManufacture = (data) => {
	return DELETE(ENDPOINTS.GET_MANUFACTURES, data);
};

const getManufacture = (id) => {
	return GET(`${ENDPOINTS.GET_MANUFACTURES}/${id}`);
};

export {
	addManufacture,
	getManufacture,
	getAllManufactures,
	deleteManufacture,
	updateManufacture
};
