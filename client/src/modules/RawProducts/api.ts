import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS, EXTERNAL_MODULES_ENDPOINTS } from './const';

const addRawProduct = (data) => {
    return POST(ENDPOINTS.ADD_MODEL, data);
};

const updateRawProduct = (data) => {
    return PUT(ENDPOINTS.UPDATE_MODEL, data);
};

const getAllRawProducts = () => {
    return GET(ENDPOINTS.GET_ALL_MODELS);
};

const deleteRawProduct = (ids: number| string[]) => {
    return DELETE(ENDPOINTS.DELETE_MODEL, ids);
};

const getAllManufactures = () => {
    return GET(EXTERNAL_MODULES_ENDPOINTS.GET_MANUFACTURES);
};

const getAllFilterValues = () => {
    return GET(EXTERNAL_MODULES_ENDPOINTS.GET_FILTERS_VALUES);
};

// const getRawProduct = (id) => {
//     return GET(`${ENDPOINTS.GET_MODEL}/${id}`);
// };


export {
    addRawProduct,
    updateRawProduct,
    getAllRawProducts,
    deleteRawProduct,
    getAllFilterValues,
    getAllManufactures
    //getRawProduct
};
