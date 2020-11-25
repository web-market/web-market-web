import { GET } from '../../../utils/api';
import { ENDPOINTS } from './const';

const getSupply = (id) => {
    return GET(`${ENDPOINTS.GET_SUPPLY_BY_ID}/${id}`);
};

export {
    getSupply
};
