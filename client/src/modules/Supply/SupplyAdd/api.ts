import { GET, POST } from '../../../utils/api';
import { ENDPOINTS } from './const';

export const validateSupplyIdentificationNumber = identificationNumber => {
    return POST(ENDPOINTS.VALIDATE_SUPPLY_NUMBER, identificationNumber);
};

export const getAllRawProducts = () => {
    return GET(ENDPOINTS.GET_ALL_MODELS);
};

export const createSupply = data => {
    return POST(ENDPOINTS.CREATE_SUPPLY, data);
};
