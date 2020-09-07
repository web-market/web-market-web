import { GET, POST, DELETE, PUT } from '../../../utils/api';
import { ENDPOINTS } from './const';

const addSupply = (data) => {
    return POST(ENDPOINTS.ADD_SUPPLY, data);
};

const editSupply = (data) => {
    return PUT(ENDPOINTS.UPDATE_SUPPLY, data);
};

const getAllSupplies = () => {
    return GET(ENDPOINTS.GET_ALL_SUPPLIES);
};

const deleteSupply = (ids: number| string[]) => {
    return DELETE(ENDPOINTS.DELETE_SUPPLY, ids);
};

const getSupply = (id) => {
    return GET(`${ENDPOINTS.GET_SUPPLY}/${id}`);
};


export {
    addSupply,
    editSupply,
    getAllSupplies,
    deleteSupply,
    getSupply
};
