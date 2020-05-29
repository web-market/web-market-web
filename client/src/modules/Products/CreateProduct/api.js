import { GET, POST, DELETE, PUT } from '../../../utils/api';
import { ENDPOINT } from './consts';

const createProduct = (data) => {
	return POST(ENDPOINT.CREATE_PRODUCT, data);
};

// const getManufactures = () => {
// 	return GET(ENDPOINTS.GET_MANUFACTURES);
// };
//

//
// const updateManufacture = (data) => {
// 	return PUT(ENDPOINTS.GET_MANUFACTURES, data);
// };
//
// const deleteManufacture = (data) => {
// 	return DELETE(ENDPOINTS.GET_MANUFACTURES, data);
// };
//
// const getManufacture = (id) => {
// 	return GET(`${ENDPOINTS.GET_MANUFACTURES}/${id}`);
// };

export {
	createProduct
};
