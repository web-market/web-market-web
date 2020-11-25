import { actionLogger, removeArrayElementById, updateArrayElementById } from '../../../utils';

import {
	SET_PENDING,
    GET_MODELS,
    ADD_MODEL,
    UPDATE_MODEL,
    DELETE_MODEL,
    GET_MANUFACTURES,
    GET_FILTER_VALUES
} from './const';
import { normalizeFilterValuesData } from '../utils';

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
        case SET_PENDING:
            return {
                ...state,
                pending: payload.pending
            };
		case GET_MODELS:
			return {
				...state,
                rawProducts: [...state.rawProducts, ...payload.rawProducts]
			};
        case GET_MANUFACTURES:
            return {
                ...state,
                manufactures: [...state.manufactures, ...payload.manufactures]
            };
        case GET_FILTER_VALUES:
            const normalizeFilterValues = normalizeFilterValuesData(payload.filterValues);

            return {
                ...state,
                filterValues: normalizeFilterValues
            };
        case ADD_MODEL:
            return {
                ...state,
                rawProducts: [...state.rawProducts, ...payload.rawProduct]
            };
        case UPDATE_MODEL:
            const updateRawProducts = updateArrayElementById(state.rawProducts, payload.rawProduct.id, payload.rawProduct);

            return {
                ...state,
                rawProducts: updateRawProducts
            };
        case DELETE_MODEL:
            let newItems = state.rawProducts;

            payload.rawProductsIds.forEach(id => {
                newItems = removeArrayElementById(newItems, id);
            });

            return {
                ...state,
                rawProducts: newItems
            };
		default:
			throw new Error();
	}
};
