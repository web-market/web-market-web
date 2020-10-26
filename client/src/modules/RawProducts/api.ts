import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS, EXTERNAL_MODULES_ENDPOINTS } from './const';

const addRawProduct = (data) => {
    return POST(ENDPOINTS.ADD_RAW_PRODUCT, data);
};

const updateRawProduct = (data) => {
    return PUT(ENDPOINTS.UPDATE_RAW_PRODUCT, data);
};

const getAllRawProducts = () => {
    return GET(ENDPOINTS.GET_ALL_RAW_PRODUCTS);
};

const deleteRawProduct = (ids: number| string[]) => {
    return DELETE(ENDPOINTS.DELETE_RAW_PRODUCT, ids);
};

const getAllManufactures = () => {
    return GET(EXTERNAL_MODULES_ENDPOINTS.GET_MANUFACTURES);
};

const getAllFilterValues = () => {
    return GET(EXTERNAL_MODULES_ENDPOINTS.GET_FILTERS_VALUES);
};

// const getRawProduct = (id) => {
//     return GET(`${ENDPOINTS.GET_RAW_PRODUCT}/${id}`);
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
