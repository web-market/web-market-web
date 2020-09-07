import { GET, POST, DELETE, PUT } from '../../utils/api';
import { ENDPOINTS } from './const';

const addStore = (data) => {
    return POST(ENDPOINTS.ADD_STORE, data);
};

const editStore = (data) => {
    return PUT(ENDPOINTS.UPDATE_STORE, data);
};

const getAllStores = () => {
    return GET(ENDPOINTS.GET_ALL_STORES);
};

const deleteStore = (ids: number| string[]) => {
    return DELETE(ENDPOINTS.DELETE_STORE, ids);
};

const getStore = (id) => {
    return GET(`${ENDPOINTS.GET_STORE}/${id}`);
};


export {
    addStore,
    deleteStore,
    getAllStores,
    getStore,
    editStore
};
