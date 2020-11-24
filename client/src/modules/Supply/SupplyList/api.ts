import { GET, DELETE } from '../../../utils/api';
import { ENDPOINTS } from './const';

const getAllSupplies = () => {
    return GET(ENDPOINTS.GET_ALL_SUPPLIES);
};

const deleteSupply = (ids: number[] | string[]) => {
    return DELETE(ENDPOINTS.DELETE_SUPPLY, ids);
};

const getSupply = (id) => {
    return GET(`${ENDPOINTS.GET_SUPPLY_BY_ID}/${id}`);
};


export {
    getAllSupplies,
    deleteSupply,
    getSupply
};
